import React, { useContext } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import ArticlePreviewGrid from '../components/ArticlePreviewGrid';
import ArticlePreviewList from '../components/ArticlePreviewList';
import { FaList, FaThLarge } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../utils/GlobalContextProvider";

const Tags = ({ pageContext, data }) => {

  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  const viewToggleHandler = () => {
    dispatch({ type: "TOGGLE_VIEW" });
  };

  const { tag } = pageContext;
  const {
      nodes: articles,
      totalCount,
  } = data.allContentfulBlogPost;

  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged: #${tag}`;
  const seoTitle = `${tag} (${totalCount})`;

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
              <a type="button" onClick={() => viewToggleHandler()}>
                <FaList className={(state.view === 'list') && "active"} title="Display posts in List View"/>
              </a>  
              <a type="button" onClick={() => viewToggleHandler()}>
                <FaThLarge className={(state.view === 'grid') && "active"} title="Display posts in Grid View"/>
              </a>
            </IconContext.Provider>
          </div>

          {
            (state.view === 'grid') 
            ? <ArticlePreviewGrid articles={articles} selectedTag={tag} /> 
            : <ArticlePreviewList articles={articles} selectedTag={tag} />
          }
      </div>
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