import { useEffect, useState } from 'react';
import './App.scss';
import BoxPreview from './components/BoxPreview/BoxPreview';
import BoxEditor from './components/BoxEditor/BoxEditor';
import { data1, data2, data3 } from './data';

function App() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setText(`${data1}${data2}${data3}`);
  }, []);

  return (
    <div className='box'>
      <BoxEditor
        value={text}
        onChange={onChange}
      />
      <BoxPreview text={text} />
    </div>
  );
}

export default App;
