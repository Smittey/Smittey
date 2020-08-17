import React from 'react';
import PropTypes from 'prop-types';
import ArticlePreviewGridItem from './ArticlePreviewGridItem';

const ArticlePreviewGrid = ({
  articles,
  selectedTag,
}) => (
  articles.map((article, i) => (
    <div className="itemWrapperGrid" key={article.title}>
      <ArticlePreviewGridItem
        article={article}
        selectedTag={selectedTag || undefined}
        index={i}
      />
    </div>
  ))
);

ArticlePreviewGrid.propTypes = {
  articles: PropTypes.array.isRequired,
  selectedTag: PropTypes.string,
};

export default ArticlePreviewGrid;
