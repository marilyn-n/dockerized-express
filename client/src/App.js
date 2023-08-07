import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

const App = () => {
  
  const createBucket = async () => {
    const response = await fetch("https://marilyn-n-solid-spoon-7vv5gv4vpjr2wq49-9000.app.github.dev/");
    const data = await response.json();
    console.log(data, 'hi---->');
  }

  return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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

          <button onClick={() => createBucket()}>Create bucket</button>
          <button onClick={() => console.log('deleteBucket')}>Delete Bucket</button>
          <button onClick={() => console.log('readFile')}>Read File</button>
          <button onClick={() => console.log('updateFile')}>Update File</button>
        </header>
       
      </div>
  )
}

export default App;
