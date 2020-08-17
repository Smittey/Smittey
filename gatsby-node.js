const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    const tagTemplate = path.resolve('./src/templates/tags.js');

    resolve(
      graphql(
        `{
          allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
            edges {
              node {
                title
                slug
              }
            }
            group(field: tags) {
              fieldValue
              totalCount
            }
          }
          site {
            siteMetadata {
              tagsPath
            }
          }
        }`,
      ).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        const posts = result.data.allContentfulBlogPost.edges;
        posts.forEach((post, index) => {
          const prev = index === 0 ? {} : posts[index - 1].node;
          const next = index === posts.length - 1 ? {} : posts[index + 1].node;

          createPage({
            path: `/${post.node.slug}`,
            component: blogPost,
            context: {
              slug: post.node.slug,
              prev,
              next,
            },
          });
        });

        const {
          allContentfulBlogPost: {
            group: tags,
          },
          site: {
            siteMetadata: {
              tagsPath,
            },
          },
        } = result.data;

        tags.forEach((tag) => {
          createPage({
            path: `${tagsPath}${tag.fieldValue}/`,
            component: tagTemplate,
            context: {
              tag: tag.fieldValue,
            },
          });
        });
      }),
    );
  });
};
