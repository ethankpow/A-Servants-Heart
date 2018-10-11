import React, { Component } from 'react';
import { Button, Card, Row, Col, Navbar, NavItem, Dropdown, Input } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../actions/'
import { fetchProjects } from '../actions/'



class Header extends Component {
    constructor(props){
        super(props)

    }

    navigateToProjects (){
        console.log('navigation working')
        this.props.fetchProjects()
    }
    render(){
        return(
            <Navbar id="my-nav-bar" brand='A Servants Heart' right>
            <NavItem onClick={() => this.navigateToProjects()} href='/projects'>Find A Project</NavItem>
            <NavItem href='components.html'>Components</NavItem>
            <NavItem href='/login'>Login</NavItem>
            </Navbar>
        )
        }
}
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({fetchProjects}, dispatch)
}
export default connect(null, mapDispatchToProps)(Header)

//onClick={() => console.log('test click')}