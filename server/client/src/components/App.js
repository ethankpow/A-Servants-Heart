import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
import Main from './main'
import Login from './Login'
import './App.css'
import Header from './Header'
import Projects from './Projects'
import NewProject from './newProject'
import OrgProject from './orgProjects'
import FooterComp from './footer'

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
                      <Route exact path='/projects/:orgid' component={OrgProject} />
                      <Route exact path="/newProject" component={NewProject} />
                      <FooterComp/>
                  </div>
              </BrowserRouter>
          </div>
      );
  }
}

export default App;
