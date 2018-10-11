import React, { Component } from 'react';
import { Button, Card, Row, Col, Navbar, NavItem, Dropdown, Input } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../actions/'
import { Redirect } from 'react-router'



class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {username:'', password:''}
    }

    handleSubmit = async () =>{
       await this.props.loginUser(this.state)
        if(this.props.login){
            this.props.history.push('/')
        }
    }
    render() {
        return (
            <div className="login-container">
                    <Input onChange={(e) => this.setState({username: e.target.value})} type="email" label="Username" s={20} />
                    <Input onChange={(e) => this.setState({password: e.target.value})} type="password" label="password" s={20} />
                    <Button onClick={() => this.handleSubmit()} waves='light'>Submit</Button>
           </div>
        );
    }
  }
const mapStateToProps = ({login}) => {
    return {login}
}
const mapDispatchToProps = (dispatch) => bindActionCreators({loginUser}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)