import React, { useContext } from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { FaList, FaThLarge } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import ArticlePreviewGrid from '../components/ArticlePreviewGrid';
import ArticlePreviewList from '../components/ArticlePreviewList';
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from '../utils/GlobalContextProvider';
import Button from '../components/Button';

const IndexPage = ({ data }) => {
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  const viewToggleHandler = () => {
    dispatch({ type: 'TOGGLE_VIEW' });
  };

  const articles = data.allContentfulBlogPost.nodes;
  const siteDescription = data.site.siteMetadata.description;

  return (
    <Layout isIndex>
      <SEO title="Andy.Writing Home" />
      <div className="articlePreviews">
        <div className="headerBlock">
          <Link to="/">
            <h1>
              <span>Andy.</span>
              <span className="theme-primary-colour">Writing</span>
            </h1>
          </Link>

          <h3>
            {siteDescription}
          </h3>
        </div>

        <div className="toggleView">
          <IconContext.Provider value={{ className: 'layoutIcons' }}>
            <Button
              type="button"
              category="Toggle View"
              action="Change Layout"
              label="List"
              onClick={() => viewToggleHandler()}
              onKeyPress={() => viewToggleHandler()}
            >
              <FaList className={(state.view === 'list') && 'active'} title="Display posts in List View" />
            </Button>
            <Button
              type="button"
              category="Toggle View"
              action="Change Layout"
              label="Grid"
              onClick={() => viewToggleHandler()}
              onKeyPress={() => viewToggleHandler()}
            >
              <FaThLarge className={(state.view === 'grid') && 'active'} title="Display posts in Grid View" />
            </Button>
          </IconContext.Provider>
        </div>

        {
          (state.view === 'grid')
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
    site {
      siteMetadata {
        description
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allContentfulBlogPost: PropTypes.object.isRequired,
    site: PropTypes.object.isRequired,
  }).isRequired,
};

export default IndexPage;
