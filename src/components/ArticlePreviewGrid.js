import React from 'react';
import PropTypes from 'prop-types';
import ArticlePreviewGridItem from './ArticlePreviewGridItem';

const ArticlePreviewGrid = ({
  articles,
}) => {

  return (
    articles.map((article, i) => (
      <div className="itemWrapperGrid" key={article.title}>
        <ArticlePreviewGridItem article={article} index={i} />
      </div>
    ))
  );
};

export default ArticlePreviewGrid;

ArticlePreviewGrid.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.object,
    previewText: PropTypes.object.isRequired,
    heroImage: PropTypes.object.isRequired,
  }),
};
