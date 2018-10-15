import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {sessionLogin} from '../actions'
import Main from './main'
import Login from './Login'
import './App.css'
import Header from './Header'
import Projects from './Projects'
import NewProject from './newProject'
import OrgProject from './orgProjects'
import CreateAccount from './createAccount'
import Profile from './Profile'
import FooterComp from './footer'

class App extends Component {
    constructor(props){
        super(props)
        this.props.sessionLogin();
    }
 
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
                      <Route exact path='/register' component={CreateAccount}/>
                      <Route exact path="/newProject" component={NewProject} />
                      <Route exact path='/profile' component={Profile}/>
                      <FooterComp/>
                  </div>
              </BrowserRouter>
          </div>
      );
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({sessionLogin}, dispatch)
}

export default connect(null, mapDispatchToProps)(App);
