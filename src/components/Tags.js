import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Tags = ({
  tags,
  selectedTag,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            tagsPath
          }
        }
      }
    `,
  );

  const { tagsPath } = site.siteMetadata;
  const separator = ' • ';

  return (
    tags.map((tag, index) => (
      <span key={tag} className={(selectedTag && tag !== selectedTag) ? 'unSelectedTag' : ''}>
        {(index > 0) && <span className="separator">{separator}</span>}
        <Link to={`${tagsPath}${tag}`}>
          #
          {tag}
        </Link>
      </span>
    ))
  );
};

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  selectedTag: PropTypes.string,
};

export default Tags;
