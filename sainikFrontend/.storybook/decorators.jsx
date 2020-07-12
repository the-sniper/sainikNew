import React from 'react';

const getStyles = (width, height) => ({
  width,
  height,
});

export const sized = ({ width = 'auto', height = 'auto' }) =>
  storyFn => <div style={getStyles(width, height)}>{storyFn()}</div>;
