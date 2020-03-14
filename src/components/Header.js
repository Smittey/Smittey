import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Header = ({ isIndex }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title,
            personalSiteUrl
          }
        }
      }
    `,
  );

  const {
    title,
    personalSiteUrl,
  } = site.siteMetadata;


  const titleSplit = title.split(".");

  return (
    <header className="header bold">

      {/* <OutboundLink
        href={personalSiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="otherLink"
      >
        Personal Website
      </OutboundLink> */}

      
        <div className="siteTitle">
          { !isIndex ? (
            <Link to="/">
              {titleSplit[0]}.<span className="theme-primary-colour">{titleSplit[1]}</span>
            </Link>
          )
        : <span>&nbsp;</span>}
        </div> 
      
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
