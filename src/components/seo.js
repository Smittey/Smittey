import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description, lang, meta, title, imageUrl, slug,
}) {
  const { site, contentfulAsset } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        contentfulAsset(contentful_id: {eq: "6hBPzeeOK4t9N2qd5IbMph"}) {
          fixed(quality: 100, width: 800) {
            src
          }
        }
      }
    `,
  );

  const {
    description: metadataDescription,
    author,
    siteUrl,
  } = site.siteMetadata;

  const metaImage = imageUrl || contentfulAsset.fixed.src;
  const metaImageurl = `https:${metaImage}`;
  const metaDescription = description || metadataDescription;
  const url = [siteUrl, slug].join('/');
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: metaImageurl,
        },
        {
          property: 'og:image:secure_url',
          content: metaImageurl,
        },
        {
          property: 'og:locale',
          content: 'en_GB',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:site',
          content: author,
        },
        {
          name: 'twitter:image',
          content: metaImageurl,
        },
        {
          name: 'twitter:image:alt',
          content: `Article title image for ${title}`,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  slug: PropTypes.string,
};

export default SEO;
