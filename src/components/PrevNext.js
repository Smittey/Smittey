import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'gatsby';

const PrevNext = ({ prevPost, nextPost }) => {

  const {
    title: prevTitle,
    slug: prevSlug,
  } = prevPost;

  const {
    title: nextTitle,
    slug: nextSlug,
  } = nextPost;

  return (
    <div className="pagination bold">
      <IconContext.Provider value={{ className: 'icons' }}>

        {Object.keys(prevPost).length > 0 && (
          <Link className="leftTitle" to={prevSlug}>
            <div className="leftArrow">
              <FaAngleDoubleLeft />
            </div>
            {prevTitle}
          </Link>
        )}

        {Object.keys(nextPost).length > 0 && (
          <Link className="rightTitle" to={nextSlug}>
            {nextTitle}
            <div className="rightArrow">
              <FaAngleDoubleRight />
            </div>
          </Link>
        )}
      </IconContext.Provider>
    </div>
  )
}

PrevNext.propTypes = {
  prevPost: PropTypes.any,
  nextPost: PropTypes.object,
}


export default PrevNext;

