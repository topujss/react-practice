import React from 'react';

const RenderProps = ({ status = true }) => {
  return <h1>{status(true)}</h1>;
};

export default RenderProps;
