import React from 'react';
import './App.scss';
import DemoBox from './components/DemoBox/DemoBox';

function App() {
  return (
    <div className="flex-container">
      <DemoBox label='box label 1'/>
      <DemoBox label='box label 2'/>
      <DemoBox label='box label 3'/>
    </div>
  );
}

export default App;
