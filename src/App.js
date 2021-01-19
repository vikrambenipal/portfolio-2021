import React from 'react-router-dom';
import About from './components/About';

import './App.css';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="App">
      <About />
      <ProjectList />
    </div>
  );
}

export default App;
