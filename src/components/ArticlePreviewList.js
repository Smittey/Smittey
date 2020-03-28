import React from 'react';
import PropTypes from 'prop-types';
import ArticlePreviewListItem from './ArticlePreviewListItem';

const ArticlePreviewList = ({
  articles,
  selectedTag
}) => {
  return (
    <div className="itemWrapperList">
      <ul className="blogList">
        {
          articles.map(article => 
            <ArticlePreviewListItem 
              key={article.title}
              article={article}
              selectedTag={ selectedTag ? selectedTag : undefined }
            />
          )
        }
      </ul>
    </div>
  );
};

ArticlePreviewList.propTypes = {
  articles: PropTypes.array.isRequired,
  selectedTag: PropTypes.string,
};

export default ArticlePreviewList;