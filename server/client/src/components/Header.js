import React, { Component } from 'react';
import { Route , withRouter} from 'react-router-dom';
import { Button, Card, Row, Col,Icon, Navbar, NavItem, Dropdown, Input } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../actions/'
import { fetchProjects } from '../actions/'
import axios from 'axios'

const brandFont = <span style={{font: 'Pacifico'}}>A Servants Heart</span>;


class Header extends Component {
    constructor(props){
        super(props)

    }

    navigateToProjects = async () => {
        console.log('navigation working')
        if(this.props){
            this.props.history.push('/projects')
        }
    }
    render(){
        if(this.props.login){
           return( <div className="container">
                    <Navbar id="my-nav-bar" brand={<span className="brand">A Servants Heart</span>} offset={2} right>
                            <NavItem onClick={() => this.navigateToProjects()} href='/projects'><Icon left>search</Icon>Find A Project</NavItem>
                            <NavItem href='/newProject'><Icon left>add_circle_outline</Icon>Post a Project</NavItem>
                            <NavItem href='/profile'>{this.props.login.name}</NavItem>
                            <NavItem href='/api/logout'>Logout</NavItem>
                    </Navbar>
            
            </div>
           )
        } else {

            return(
                <div className="container">
                        <Navbar id="my-nav-bar" brand={<span className="brand">A Servants Heart</span>} offset={2} right>
                                <NavItem onClick={() => this.navigateToProjects()} href='/projects'><Icon left>search</Icon>Find A Project</NavItem>
                                <NavItem href='/login'><Icon left>account_circle</Icon>Login</NavItem>
                        </Navbar>
                
                </div>
            )
        }
        }
}
const mapStateToProps = ({login}) => {
    return {login}
}
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({fetchProjects}, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))

//onClick={() => console.log('test click')}