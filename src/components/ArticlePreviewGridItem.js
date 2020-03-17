import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Tags from './Tags';
const moment = require('moment');
import { Link } from 'gatsby';

const ArticlePreviewGridItem = ({
  article,
  index,
  selectedTag
}) => {
  const {
    title,
    description,
    previewText,
    heroImage,
    slug,
    publishDate,
    tags
  } = article;

  const formattedPublishedDate = moment(publishDate).format('MMM [\']YY');

  return (
    (index % 2)
      ? (
        <>
          <div className="box">
            <Link to={slug}>
              <h2 className="title">{title}</h2>
              <h4 className="description">{description.description}</h4>
            </Link>
            <p className="date">{formattedPublishedDate}</p>
            <p className="previewText">{previewText.previewText}</p>
            <div className="tags bold">
              <Tags tags={tags} 
                selectedTag={selectedTag}
              />
            </div>
          </div>

          <Link to={slug} className="imgBox">
            <BackgroundImage
              Tag="section"
              id="media-test"
              className="heroImageGatsby"
              fluid={heroImage.sizes}
            >
              <div className="box" />
            </BackgroundImage>
          </Link>
        </>
      ) : (
        <>
          <Link to={slug} className="imgBox">
            <BackgroundImage
              Tag="section"
              id="media-test"
              className="heroImageGatsby"
              fluid={heroImage.sizes}
            >
              <div className="box" />
            </BackgroundImage>
          </Link>

          <div className="box">
            <Link to={slug}>
              <h2 className="title">{title}</h2>
              <h4 className="description">{description.description}</h4>
            </Link>
            <p className="date">{formattedPublishedDate}</p>
            <p className="previewText">{previewText.previewText}</p>
            <div className="tags bold">
              <Tags tags={tags} 
                selectedTag={selectedTag}
              />
            </div>
          </div>
        </>
      )
  );
};

export default ArticlePreviewGridItem;

ArticlePreviewGridItem.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.object,
    previewText: PropTypes.object.isRequired,
    heroImage: PropTypes.object.isRequired,
  }),
};
