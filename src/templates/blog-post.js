import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Tags from '../components/Tags';
import Author from '../components/Author';
import PrevNext from '../components/PrevNext';
import Disqus, { CommentCount } from 'disqus-react';

const BlogPostTemplate = ({ data, pageContext }) => {

  const [showComments, setShowComments] = useState(false);

  const handleCommentsToggle = (toggle) => {
    setShowComments(toggle);
  }

  const {
    title,
    heroImage,
    body,
    publishDate,
    tags,
    slug,
    description
  } = data.contentfulBlogPost;

  const { 
    title: siteTitle,
  } =  data.site.siteMetadata;

  const {
    prev,
    next
  } = pageContext;
  
  const disqusShortname = 'smittey';
  const disqusConfig = {
      url: `https://smittey.co.uk/${slug}/`
  };

  return (
    <Layout>
      <div>
        <Helmet title={`${title} | ${siteTitle}`} />
        <div>
          <Img 
            alt={title} 
            fluid={heroImage.fluid}
            style={{ maxHeight: '50vh' }}
          />
        </div>
        <div className="blogWrapper">
          <div className="infoHeader bold">
            <span className="date">{publishDate}</span>
            <h1 className="title">{title}</h1>
            <h2 className="description">{description.description}</h2>
            <span className="tags"><Tags tags={tags}/></span>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html,
            }}
          />

          <Author />

          <PrevNext prevPost={prev} nextPost={next} />
            
          <div className="divider"></div>
          
            <div className="comments">
            { showComments 
              ?  
              (
                <>
                  <button onClick={() => handleCommentsToggle(false)}>
                    Hide Comments
                  </button>
                  <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </>
              )
              : 
              (
                <button onClick={() => handleCommentsToggle(true)}>
                  {'Show '}
                  <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                      Comments
                  </Disqus.CommentCount>
                </button>
              )
            }
          </div>
        </div>
      </div>
    </Layout>
  )
  
}



export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      description {
        description
      }
      slug
      tags
      publishDate(formatString: "MMM [']YY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulBlogPost: PropTypes.object.isRequired,
    site: PropTypes.object.isRequired,
  }).isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default BlogPostTemplate;
