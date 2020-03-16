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
    'gatsby-transformer-remark',
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
  ],
};
