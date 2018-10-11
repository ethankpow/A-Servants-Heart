import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import Main from './main'
import Login from './Login'
import './App.css'
import Header from './Header'
import Projects from './Projects'

class App extends Component {
 
  render() {
      return (
          <div className="container">
              <BrowserRouter>
                 <div>
                      {/* the routes that form our webpages */}
                      <Header/>
                      <Route exact path="/" component={Main} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/projects" component={Projects} />
                  </div>
              </BrowserRouter>
          </div>
      );
  }
}

export default App;
