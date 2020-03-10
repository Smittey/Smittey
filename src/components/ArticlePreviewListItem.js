import React from 'react';
import PropTypes from 'prop-types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Tags from './Tags';
const moment = require('moment');
import { Link } from 'gatsby';

const ArticlePreviewListItem = ({
  article,
}) => {
  const {
    title,
    description,
    previewText,
    slug,
    publishDate,
    tags
  } = article;

  const formattedPublishedDate = moment(publishDate).format('MMM [\']YY');

  return (
    <li>
      <time className="time" dateTime="2013-04-10 18:30">
        <span>{formattedPublishedDate}</span>
      </time>
      <div className="label">

        <Link to={slug} activeClassName="activeMenuLink" className="menuLink">
          <h2 className="title">{title}</h2>
          <h4 className="description">{description.description}</h4>
        </Link>

        <div>{previewText.previewText}</div>
        <div className="tags bold"><Tags tags={tags} /></div>
      </div>
    </li>
  );
};

export default ArticlePreviewListItem;

ArticlePreviewListItem.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.object,
    previewText: PropTypes.object.isRequired,
    heroImage: PropTypes.object.isRequired,
  }),
};
