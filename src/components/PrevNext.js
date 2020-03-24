import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'gatsby';

const PrevNext = ({ siteUrl, prevPost, nextPost }) => {

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

                {prevPost && (
                    <Link className="leftTitle" to={prevSlug}>
                        <div className="leftArrow">
                            <FaAngleDoubleLeft /> 
                        </div>
                        {prevTitle}
                    </Link>
                )}

                {nextPost && (
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

export default PrevNext;

