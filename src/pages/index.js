import React, { useState } from 'react';
import { Link, graphql } from "gatsby"
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import ArticlePreviewGrid from '../components/ArticlePreviewGrid';
import ArticlePreviewList from '../components/ArticlePreviewList';
import { FaBars, FaThLarge } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const IndexPage = ({ data }) => {

  const [displayView, setDisplayView] = useState("list");

  const viewToggleHandler = (viewToSet) => {
    setDisplayView(viewToSet);
  }

  const articles = data.allContentfulBlogPost.nodes;


  return (
    <Layout isIndex={true}>
      <SEO title="Blog Home" />

      <div className="articlePreviews">
        <div className="headerBlock">
          <Link to="/">
            <h1>
              <span>Andy.</span>
              <span className="theme-primary-colour bold">Writing</span>
            </h1>
          </Link>
        </div>

        <div className="toggleView">
          <IconContext.Provider value={{ className: 'layoutIcons' }}>
            <a type="button" onClick={() => viewToggleHandler('list')}><FaBars className={(displayView === 'list') && "active"} /></a>  
            <a type="button" onClick={() => viewToggleHandler('grid')}><FaThLarge className={(displayView === 'grid') && "active"}/></a>
          </IconContext.Provider>
        </div>

        {
          (displayView === 'grid') 
          ? <ArticlePreviewGrid articles={articles} /> 
          : <ArticlePreviewList articles={articles} />
        }

      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ArticlesQuery {
      allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
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
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allContentfulBlogPost: PropTypes.object.isRequired,
  }).isRequired,
};

export default IndexPage;
