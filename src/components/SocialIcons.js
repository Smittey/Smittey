import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        contentfulAsset(contentful_id: {eq: "2KdcKlMFZES1yMGumQCmjH"}) {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                quality: 90
              )
            }
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
      <div className="iconsWrapper">
        {
          allContentfulSocialMediaIcons.nodes.map((item) => (
            <OutboundLink
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="imgBox"
              key={item.name}
            >
              <GatsbyImage
                className="social"
                style={{
                  display: 'inline-block',
                  width: size,
                  height: size,
                }}
                image={
                  getImage(item.image)
                }
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
          <GatsbyImage
            className="social"
            style={{
              display: 'inline-block',
              width: size,
              height: size,
            }}
            image={
              getImage(contentfulAsset.localFile)
            }
            alt="Personal website icon link"
          />
        </OutboundLink>
      </div>
    </div>
  );
};

SocialIcons.propTypes = {
  size: PropTypes.string.isRequired,
};

export default SocialIcons;
