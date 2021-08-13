import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import Questions from './components/Questions';
import QuestionForm from './components/QuestionForm';

function App({ store }) {
  return (
    // gives store access to all components
    <Provider store={store}>    
    <div className="App">
      {/* React Template */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        <h1>This is the frontend</h1>
        <QuestionForm />
        <Questions />
      </header>
    </div>
    </Provider>
  );
}

export default App;
