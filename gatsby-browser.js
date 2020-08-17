import React from 'react';
import PropTypes from 'prop-types';
import GlobalContextProvider from './src/utils/GlobalContextProvider';

require('prismjs/themes/prism-coy.css');

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node,
};
