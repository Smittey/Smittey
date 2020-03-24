require('dotenv').config({
  path: '.env',
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.',
  );
}

module.exports = {
  siteMetadata: {
    name: 'Andy Smith',
    title: 'Andy.Writing',
    location: 'London, UK',
    description: 'Tech and Career blog by Andy Smith, senior software engineer based in London, UK',
    author: '@smittey',
    siteUrl: 'https://www.smittey.co.uk/',
    personalSiteUrl: 'https://www.andysmith.me/',
    tagsPath: '/tags/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        icon: 'src/assets/images/a-icon.png',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-74354041-2',
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images-contentful',
            options: {
              withWebp: true,
              maxWidth: 1000,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs'
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        custom_namespaces: {
          'g': 'http://base.google.com/ns/1.0'
        },
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) =>
              allContentfulBlogPost.edges.map(edge =>
                Object.assign({},
                  {
                    title: edge.node.title,
                    date: edge.node.publicationDate,
                    description: edge.node.previewText.previewText,
                    url: `${site.siteMetadata.siteUrl}/${edge.node.slug}`,
                    guid: `${site.siteMetadata.siteUrl}/${edge.node.slug}`,
                    custom_elements: [
                      {'g:image_link': `http:${edge.node.heroImage.file.url}`}
                    ],                    
                  },
                )
              ),
            query: `{
              site {
                siteMetadata {
                  title
                  siteUrl
                }
              }
              allContentfulBlogPost(sort: {fields: publishDate, order: DESC}) {
                edges {
                  node {
                    title
                    publishDate
                    previewText {
                      previewText
                    }
                    heroImage {
                      file {
                        url
                      }
                    }
                    slug
                  }
                }
              }
            }`,
            output: '/feed.xml',
            title: 'Andy.Writing Blog Post Feed'
          },
        ],
      },
    },
  ],
};
