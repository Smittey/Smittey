import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Disqus from 'disqus-react';
import Layout from '../components/Layout';
import Tags from '../components/Tags';
import Author from '../components/Author';
import PrevNext from '../components/PrevNext';
import SEO from '../components/seo';

const BlogPostTemplate = ({ data, pageContext }) => {
  const [showComments, setShowComments] = useState(false);

  const handleCommentsToggle = (toggle) => {
    setShowComments(toggle);
  };

  const {
    title,
    heroImage,
    author,
    body,
    publishDate,
    tags,
    slug,
    description,
  } = data.contentfulBlogPost;

  const {
    title: siteTitle,
  } = data.site.siteMetadata;

  const {
    prev,
    next,
  } = pageContext;

  const disqusShortname = 'smittey';
  const disqusConfig = {
    url: `https://smittey.co.uk/${slug}/`,
  };
  console.log(heroImage);
  return (
    <Layout>
      <SEO
        title={`${title} | ${siteTitle}`}
        description={description.description}
        imageUrl={heroImage.localFile.childImageSharp.resize.src}
        slug={slug}
      />
      <div>
        <div>
          <GatsbyImage
            alt={title}
            image={
              getImage(heroImage.localFile)
            }
            style={{
              maxHeight: '50vh',
              maxWidth: '1180px',
              margin: '0 auto',
            }}
          />
        </div>
        <div className="blogWrapper">
          <div className="infoHeader bold">
            <span className="date">{publishDate}</span>
            <h1 className="title">{title}</h1>
            <h2 className="description">{description.description}</h2>
            <span className="tags"><Tags tags={tags} /></span>
          </div>
          <div
            className="blogContent"
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html,
            }}
          />

          <Author author={author} />

          <PrevNext prevPost={prev} nextPost={next} />

          <div className="divider"></div>
          <div className="comments">
            { showComments
              ? (
                <>
                  <button type="button" onClick={() => handleCommentsToggle(false)}>
                    Hide Comments
                  </button>
                  <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </>
              )
              : (
                <button type="button" onClick={() => handleCommentsToggle(true)}>
                  <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                    Comments
                  </Disqus.CommentCount>
                </button>
              )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

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
      previewText {
        previewText
      }
      slug
      tags
      publishDate(formatString: "MMM Do [']YY")
      heroImage {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 1180,
              placeholder: BLURRED,
              layout: FULL_WIDTH
            )
            resize(width: 800, quality: 100) {
              src
            }
          }
        }
      }
      author {
        shortBio {
          shortBio
        }
        image {
          gatsbyImageData(height: 200, placeholder: BLURRED)
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
