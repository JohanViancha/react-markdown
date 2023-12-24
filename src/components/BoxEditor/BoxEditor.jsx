import React, { useEffect, useState } from 'react';
import './BoxEditor.scss';

const BoxEditor = ({ onChange, value }) => {

  return (
    <div className='box-editor'>
      <section className='box-editor__header'>Editor Markdown</section>
      <section className='box-editor__body'>
        <textarea
          className='editor'
          id='editor'
          onChange={onChange}
          value={value}
        />
      </section>
    </div>
  );
};

export default BoxEditor;
