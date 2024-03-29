import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { trackCustomEvent, OutboundLink } from 'gatsby-plugin-google-analytics';

const Button = ({
  href,
  label,
  style,
  onClick,
  disabled,
  category,
  type,
  action,
  children,
  classNameProp,
}) => {
  const cssClasses = classNames(
    'button',
    classNameProp,
  );

  let shouldTrackEvent = true;

  if (classNameProp && classNameProp === 'selected') {
    shouldTrackEvent = false;
  }

  return (
    !href
      ? (
        /* eslint-disable-next-line react/button-has-type */
        <button
          type={type ? 'button' : 'submit'}
          className={cssClasses}
          disabled={disabled}
          onClick={() => {
            onClick();
            (shouldTrackEvent && trackCustomEvent({
              category,
              action,
              label,
            }));
          }}
          style={style}
        >
          {children}
        </button>
      )
      : (
        <OutboundLink
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={cssClasses} style={style}>
            {children}
          </div>
        </OutboundLink>
      )
  );
};

Button.defaultProps = {
  onClick: () => { },
  href: null,
};

Button.propTypes = {
  href: PropTypes.string,
  classNameProp: PropTypes.string,
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.func,
  category: PropTypes.string,
  type: PropTypes.string,
  action: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};

export default Button;
