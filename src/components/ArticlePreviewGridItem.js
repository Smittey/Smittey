import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import Tags from './Tags';

const moment = require('moment');

const ArticlePreviewGridItem = ({
  article,
  index,
  selectedTag,
}) => {
  const {
    title,
    description,
    previewText,
    heroImage,
    slug,
    publishDate,
    tags,
  } = article;

  const formattedPublishedDateLong = moment(publishDate).format('MMM Do [\']YY');
  const formattedPublishedDateShort = moment(publishDate).format('MMM [\']YY');

  return (
    (index % 2)
      ? (
        <>
          <div className="box">
            <Link to={`/${slug}`}>
              <h2 className="title">{title}</h2>
              <h4 className="description">{description.description}</h4>
            </Link>
            <p title={formattedPublishedDateLong} className="date">{formattedPublishedDateShort}</p>
            <p className="previewText">{previewText.previewText}</p>
            <div className="tags bold">
              <Tags
                tags={tags}
                selectedTag={selectedTag}
              />
            </div>
          </div>

          <Link to={`/${slug}`} className="imgBox">
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
          <Link to={`/${slug}`} className="imgBox">
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
            <Link to={`/${slug}`}>
              <h2 className="title">{title}</h2>
              <h4 className="description">{description.description}</h4>
            </Link>
            <p title={formattedPublishedDateLong} className="date">{formattedPublishedDateShort}</p>
            <p className="previewText">{previewText.previewText}</p>
            <div className="tags bold">
              <Tags
                tags={tags}
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
  selectedTag: PropTypes.string,
  article: PropTypes.shape({
    publishDate: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    previewText: PropTypes.object.isRequired,
    heroImage: PropTypes.object.isRequired,
  }),
  index: PropTypes.number.isRequired,
};
