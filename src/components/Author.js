import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import SocialIcons from './SocialIcons';
import Img from "gatsby-image"

const Author = () => {

    const { contentfulAsset } = useStaticQuery(
        graphql`
          query {
            contentfulAsset(contentful_id: {eq: "6koZP7rOjKD95OEfMsAgfg"}) {
              sizes(maxHeight: 200) {
                  ...GatsbyContentfulSizes
              }
            }
          }
        `,
      );
    

    return (
        <div className="authorContainer">
            <div className="image">
                <Img
                    fluid={contentfulAsset.sizes}
                    objectFit="cover"
                    alt=""
                    className="authorImage"

                />
            </div> 
            <div className="info">
                <div className="infoContainer">
                    <div className="text italic">
                        Andy is a senior software engineer, currently working in London, UK. He has a wealth of experience working in back-end, front-end and devOps technologies and helped clients over multiple industries. 
                    </div>
                    <div className="iconsWrapper">
                        <SocialIcons size="40px" />
                    </div>
                </div>

            </div>

        </div>   
        
    )
}

export default Author;

