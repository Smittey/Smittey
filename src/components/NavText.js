import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const NavText = () => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `,
  );

  return (
    <p className="menuText bold">
      {site.siteMetadata.description}
    </p>
  );
}


export default NavText;
