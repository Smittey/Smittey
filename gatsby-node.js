const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const tagTemplate = path.resolve("src/templates/tags.js")

    resolve(
      graphql(
        `
          {
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
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges;
        posts.forEach((post, index) => {
          const prev = index === 0 ? false : posts[index - 1].node;
          const next = index === posts.length - 1 ? false : posts[index + 1].node;

          createPage({
            path: `/${post.node.slug}`,
            component: blogPost,
            context: {
              slug: post.node.slug,
              prev,
              next,
            },
          })
        })

        const tags = result.data.allContentfulBlogPost.group;
        const tagsPath = result.data.site.siteMetadata.tagsPath;

        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `${tagsPath}${tag.fieldValue}/`,
            component: tagTemplate,
            context: {
              tag: tag.fieldValue,
            },
          })
        })

      })
    )
  })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }