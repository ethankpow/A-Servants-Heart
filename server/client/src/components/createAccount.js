import React, { Component } from 'react';
import { Card, Row, Col, Input, Button } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {createUser} from '../actions'



class CreateAccount extends Component {
    constructor(props){
        super(props)

    this.state = {
        name:"",
        email:"",
        phone_number: 0,
        username:"",
        password:"",
    }

    }
    handleSubmit () {
        console.log(this.state)
        this.props.createUser(this.state)
    }

    render(){
        return(
            <div>
            <div className="center-align">
            <div><h3>Create an Account</h3><h4>Join a community that serves with purpose</h4></div>
            </div>
            <div className="center-align" left>
                <Row left>
                    <Col s={12} m={4} offset={"m4"}>
                        <Input s={12} onChange={(e) => this.setState({name: e.target.value})} label="Name" />
                        <Input s={12} onChange={(e) => this.setState({email: e.target.value})}type="email" label="Email"  />
                        <Input s={12} onChange={(e) => this.setState({phone_number: e.target.value})}label="Phone Number" />
                        <Input s={12} onChange={(e) => this.setState({username: e.target.value})}label="Username"   />
                        <Input s={12} onChange={(e) => this.setState({password: e.target.value})}type="password" label="password" />
                    </Col>
                    <Col className="center-align" s={12}>
                        <Button onClick={() => this.handleSubmit()} waves='light'>Submit</Button>
                   </Col>  
                </Row>
            </div>
            </div>
            
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({createUser}, dispatch)
}
export default connect(null, mapDispatchToProps)(CreateAccount)