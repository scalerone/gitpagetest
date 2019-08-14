import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import CommentBox from "./components/CommentBox";
const tags = ['有趣','程序员']
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>开始学习React.js Hello</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/*<NameCard name="viking" number="138123456" isHuman tags={tags}/>*/}
      {/*<LikesButton />*/}
      <CommentBox/>
    </div>
  );
}

export default App;
