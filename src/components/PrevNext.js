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

                <div className="left">
                    <a href={(process.env.environment === "production") ? `${baseUrl}` : `/${prevSlug}`}><FaAngleDoubleLeft /> {prevTitle}</a>
                </div>
                <div className="right">
                    <a href={(process.env.environment === "production") ? `${baseUrl}` : `/${nextSlug}`}>{nextTitle} <FaAngleDoubleRight /></a>
                </div>
            </IconContext.Provider>
        </div>   
    )
}

export default PrevNext;

