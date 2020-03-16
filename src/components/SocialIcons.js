import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const SocialIcons = ({ size }) => {
  const { allContentfulSocialMediaIcons, contentfulAsset, site } = useStaticQuery(
    graphql`
      query {
        allContentfulSocialMediaIcons {
          nodes {
            name
            link
            altText
            image {
              sizes(maxHeight: 300) {
                  ...GatsbyContentfulSizes
              }
            }
          }
        }
        contentfulAsset(contentful_id: {eq: "1WJRLO2hr4gqnJcDW4p7Za"}) {
          sizes(maxHeight: 200) {
            ...GatsbyContentfulSizes
          }            
        }
        site {
          siteMetadata {
            personalSiteUrl
          }
        }
      }
    `,
  );
  return (
    <div className="icons">
      <div class="iconsWrapper">
      {
        allContentfulSocialMediaIcons.nodes.map((item) => (
          <OutboundLink
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="imgBox"
            key={item.name}
          >
            <Img
              className="social"
              style={{
                display: 'inline-block',
                width: size,
                height: size,
              }}
              sizes={item.image.sizes}
              alt={item.altText}
            />
          </OutboundLink>
        ))
      }
      <OutboundLink
          href={site.siteMetadata.personalSiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="imgBox"
        >
          <Img
            className="social"
            style={{
              display: 'inline-block',
              width: size,
              height: size,
            }}
            sizes={contentfulAsset.sizes}
            alt="Personal website icon link"
          />
        </OutboundLink>
      </div>
    </div>
  );
};

export default SocialIcons;
