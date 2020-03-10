import React from 'react';
import PropTypes from 'prop-types';

const Tags = ({
    tags
}) => {

    const separator = " • ";

    return (
        tags.map((tag, index) => 
            <span>
                { (index > 0) && <span className="separator">{separator}</span> }
                <a type="button" onClick={() => {}}>
                    
                    #{tag}
                </a>
            </span>
        )   
    )
}

Tags.propTypes = {
    tags: PropTypes.array.isRequired, 
}

export default Tags;