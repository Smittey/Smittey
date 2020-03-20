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
    baseUrl: 'https://www.smittey.co.uk/',
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
        icon: 'src/assets/images/a-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-74354041-1',
      },
    },

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              withWebp: true,
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs'
          },
        ],
      },
    },


    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //         options: {
    //           classPrefix: "language-",
    //           inlineCodeMarker: null,

    //           aliases: {},
    //           showLineNumbers: true,
    //           // If setting this to true, the parser won't handle and highlight inline
    //           // code used in markdown i.e. single backtick code like `this`.
    //           noInlineHighlight: false,
    //           // This adds a new language definition to Prism or extend an already
    //           // existing language definition. More details on this option can be
    //           // found under the header "Add new language definition or extend an
    //           // existing language" below.
    //           languageExtensions: [
    //             {
    //               language: "superscript",
    //               extend: "javascript",
    //               definition: {
    //                 superscript_types: /(SuperType)/,
    //               },
    //               insertBefore: {
    //                 function: {
    //                   superscript_keywords: /(superif|superelse)/,
    //                 },
    //               },
    //             },
    //           ],
    //           // Customize the prompt used in shell output
    //           // Values below are default
    //           prompt: {
    //             user: "root",
    //             host: "localhost",
    //             global: false,
    //           },
    //           // By default the HTML entities <>&'" are escaped.
    //           // Add additional HTML escapes by providing a mapping
    //           // of HTML entities and their escape value IE: { '}': '&#123;' }
    //           escapeEntities: {},
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
};
