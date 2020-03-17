import React, { useState} from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout';
import SEO from '../components/seo';
import ArticlePreviewGrid from '../components/ArticlePreviewGrid';
import ArticlePreviewList from '../components/ArticlePreviewList';
import { FaBars, FaThLarge } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Tags = ({ pageContext, data }) => {
    const [displayView, setDisplayView] = useState("list");

    const viewToggleHandler = (viewToSet) => {
        setDisplayView(viewToSet);
    }

    const { tag } = pageContext;
    const {
        nodes: articles,
        totalCount,
    } = data.allContentfulBlogPost;

    const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`
    const seoTitle = `${tag} (${totalCount})`
    return (

      <Layout isIndex={true}>
        <SEO title={seoTitle} />
          <div className="articlePreviews">
            <div className="headerBlock">
              <Link to="/">
                <h1>
                  <span>Andy.</span>
                  <span className="theme-primary-colour bold">Writing</span>
                </h1>
              </Link>
              <h2>
                <span>{tagHeader}</span>
              </h2>
            </div>

            <div className="toggleView">
              <IconContext.Provider value={{ className: 'layoutIcons' }}>
                  <a type="button" onClick={() => viewToggleHandler('list')}><FaBars className={(displayView === 'list') && "active"} /></a>  
                  <a type="button" onClick={() => viewToggleHandler('grid')}><FaThLarge className={(displayView === 'grid') && "active"}/></a>
              </IconContext.Provider>
            </div>

            {
            (displayView === 'grid') 
            ? <ArticlePreviewGrid articles={articles} selectedTag={tag} /> 
            : <ArticlePreviewList articles={articles} selectedTag={tag} />
            }

        </div>
        <Link to="/tags">All tags</Link>

      </Layout>
  )
}

export default Tags;

export const pageQuery = graphql`
    query ($tag: String) {
        allContentfulBlogPost(filter: {tags: {in: [$tag]}}) {
            totalCount
            nodes {
              title
              description {
                description
              }
              previewText {
                previewText
              }
              tags
              slug
              publishDate
              heroImage {
                sizes(maxHeight: 500, cropFocus: CENTER) {
                  ...GatsbyContentfulSizes
                }
              }
            }
          }
    } 
    `