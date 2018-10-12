import React, { Component } from 'react';
import { Button, Card, CardTitle, Row, Col, Navbar, NavItem, Dropdown, Input } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { createProject } from '../actions/index'
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom'
import { withRouter } from 'react-router';

class NewProjectForm extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            name:"",
            description:"",
            due_date:"",
            image_URL:""
        }
    }
    handleSubmit = async () =>{
        console.log(this.state)
        debugger
       await this.props.createProject(this.state)
       if(this.props){
           this.props.history.push('/')
       }
    }
    render(){


        return (
            <div className="container">
                <h1 className="center-align">Post your project!</h1>
                    <Row>
                        <Col s={12} m={10} offset={"m1"}>
                            <Input s={12} onChange={(e) => this.setState({name: e.target.value})} label="name" label="Name of your Project" />
                            <Input s={12} onChange={(e) => this.setState({description: e.target.value})} type="textarea" label="Description" s={12} />
                            <Input s={12} name='on' type='date' label="Due Date" onChange={(e) => this.setState({due_date: e.target.value})} s={12}/>
                            <Input s={12} onChange={(e) => this.setState({image_URL: e.target.value})} name="textarea" label="ImageURL" />
                        </Col>
                        <Col className="center-align" s={12}>
                            <Button onClick={() => this.handleSubmit()} waves='light'>Submit</Button>
                        </Col>
                    </Row>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({createProject}, dispatch)
}
export default withRouter(connect(null, mapDispatchToProps)(NewProjectForm)) 