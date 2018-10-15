import React, { Component } from 'react';
import { Button, Row, Col, Input } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../actions/'



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
          <div className="full-container">

            <div className="container">
                    <Col className='center-align'><h3>Welcome Back</h3></Col>
                <Row>
                    <Col s={12} m={4} offset={"m4"}>
                        <Input s={12} m={12}onChange={(e) => this.setState({username: e.target.value})} type="email" label="Username" s={20} />
                        <Input s={12} m={12} onChange={(e) => this.setState({password: e.target.value})} type="password" label="password" s={20} />
                    </Col>
                    <Col className="center-align" s={12}>
                     <Button onClick={() => this.handleSubmit()} waves='light'>Submit</Button>
                   </Col>           
                </Row>
            </div>
          </div>
        );
    }
  }
const mapStateToProps = ({login}) => {
    return {login}
}
const mapDispatchToProps = (dispatch) => bindActionCreators({loginUser}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)