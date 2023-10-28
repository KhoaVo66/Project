import logo from './logo.svg';
import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Wellcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name = 'Bruce'>
        <p>This is children props</p>
      </Greet>
      <Greet name = 'Clark'/>
      <Greet name = 'Diana'/>
      <Wellcome name = 'Bruce'><p>You are so good</p></Wellcome>
    </div>
  );
}

export default App;
