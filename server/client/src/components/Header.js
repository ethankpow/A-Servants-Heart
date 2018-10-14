import React, { Component } from 'react';
import { Route , withRouter} from 'react-router-dom';
import { Button, Card, Row, Col,Icon, Navbar, NavItem, Dropdown, Input } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../actions/'
import { fetchProjects } from '../actions/'

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
        return(
            <div className="container">
                    <Navbar id="my-nav-bar" brand={<span className="brand">A Servants Heart</span>} offset={2} right>
                            <NavItem onClick={() => this.navigateToProjects()} href='/projects'><Icon left>search</Icon>Find A Project</NavItem>
                            <NavItem href='/newProject'><Icon left>add_circle_outline</Icon>Post a Project</NavItem>
                            <NavItem href='/login'><Icon left>account_circle</Icon>Login</NavItem>
                    </Navbar>
            
            </div>
        )
        }
}
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({fetchProjects}, dispatch)
}
export default withRouter(connect(null, mapDispatchToProps)(Header))

//onClick={() => console.log('test click')}