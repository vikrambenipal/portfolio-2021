import React from 'react-router-dom';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={withRouter(Home)} />
          <Route exact path='/projects/:title' component={withRouter(ProjectPage)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
