import React from 'react';
import './BoxPreview.scss';

const BoxPreview = ({ text }) => {
  return (
    <div
      className='preview'
      id='preview'
      dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
    ></div>
  );
};

export default BoxPreview;
