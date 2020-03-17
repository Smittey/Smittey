import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const PrevNext = ({ baseUrl, prevPost, nextPost }) => {

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
                    <a className="leftTitle" href={(process.env.environment === "production") ? `${baseUrl}` : `/${prevSlug}`}>
                        <div className="leftArrow">
                            <FaAngleDoubleLeft /> 
                        </div>
                        {prevTitle}
                    </a>
                )}

                {nextPost && (
                    <a className="rightTitle" href={(process.env.environment === "production") ? `${baseUrl}` : `/${nextSlug}`}>
                        {nextTitle}
                        <div className="rightArrow">
                            <FaAngleDoubleRight /> 
                        </div>
                    </a>
                )}
            </IconContext.Provider>
        </div>   
    )
}

export default PrevNext;

