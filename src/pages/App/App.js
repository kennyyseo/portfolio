import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../../components/Navbar/Navbar';
import Homepage from '../Homepage/Homepage';
import Resumepage from '../Resumepage/Resumepage';
import Projectpage from '../Projectpage/Projectpage';
import Contactpage from '../Contactpage/Contactpage';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  handleResumeDownload = () => {

  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() =>
            <Homepage />
          } />
          <Route exact path='/projects' render={() =>
            <Projectpage />
          } />
          <Route exact path='/contact' render={() =>
            <Contactpage />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
