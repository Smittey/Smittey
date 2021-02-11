import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import SocialIcons from './SocialIcons';

const Author = ({ author }) => {
  const [width, setWidth] = useState();
  const { shortBio: { shortBio }, image } = author;
  const setScreenSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize();
    };

    setScreenSize();
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, []);

  return (
    <div className="authorContainer">
      <div className="flexContainer">
        <div className="image">
          <Img
            fluid={image.sizes}
            objectFit="cover"
            alt=""
            className="authorImage"
          />
        </div>
        <div className="info">
          <div className="infoContainer">
            {width > 800 && (
              <div className="text italic">
                {shortBio}
              </div>
            )}
            <div className="iconsWrapper">
              <SocialIcons size="40px" />
            </div>
          </div>
        </div>
      </div>
      {width <= 800 && (
        <div className="text italic">
          {shortBio}
        </div>
      )}
    </div>
  );
};

Author.propTypes = {
  author: PropTypes.shape({
    shortBio: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
  }).isRequired,
};

export default Author;
