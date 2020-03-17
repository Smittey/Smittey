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

export default ArticlePreviewList;

ArticlePreviewList.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.object,
    previewText: PropTypes.object.isRequired,
    heroImage: PropTypes.object.isRequired,
  }),
};
