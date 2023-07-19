import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { IconContext } from 'react-icons';
import { FaList, FaThLarge } from 'react-icons/fa';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import ArticlePreviewGrid from '../components/ArticlePreviewGrid';
import ArticlePreviewList from '../components/ArticlePreviewList';
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from '../utils/GlobalContextProvider';

const Tags = ({ pageContext, data }) => {
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  const viewToggleHandler = () => {
    dispatch({ type: 'TOGGLE_VIEW' });
  };

  const { tag } = pageContext;
  const {
    nodes: articles,
    totalCount,
  } = data.allContentfulBlogPost;

  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged: #${tag}`;
  const seoTitle = `Andy.Writing | ${tag} (${totalCount})`;

  return (
    <Layout isIndex>
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
            <button
              type="button"
              onKeyPress={() => viewToggleHandler()}
              onClick={() => viewToggleHandler()}
            >
              <FaList
                className={(state.view === 'list') && 'active'}
                title="Display posts in List View"
              />
            </button>
            <button
              type="button"
              onKeyPress={() => viewToggleHandler()}
              onClick={() => viewToggleHandler()}
            >
              <FaThLarge
                className={(state.view === 'grid') && 'active'}
                title="Display posts in Grid View"
              />
            </button>
          </IconContext.Provider>
        </div>
        {
          (state.view === 'grid')
            ? <ArticlePreviewGrid articles={articles} selectedTag={tag} />
            : <ArticlePreviewList articles={articles} selectedTag={tag} />
        }
      </div>
    </Layout>
  );
};

Tags.propTypes = {
  data: PropTypes.shape({
    allContentfulBlogPost: PropTypes.object.isRequired,
  }).isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query ($tag: String) {
    allContentfulBlogPost(sort: {fields: publishDate, order: DESC}, filter: {tags: {in: [$tag]}}) {
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
          gatsbyImageData(layout: FULL_WIDTH, height: 500)
        }
      }
    }
  } 
`;

export default Tags;
