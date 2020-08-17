import { useStaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ isIndex }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  const {
    title,
  } = site.siteMetadata;

  const titleSplit = title.split('.');

  return (
    <header className="header bold">
      <div className="siteTitle">
        { !isIndex && (
          <Link to="/">
            {titleSplit[0]}
            .
            <span className="theme-primary-colour">{titleSplit[1]}</span>
          </Link>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  isIndex: PropTypes.bool,
};

export default Header;
