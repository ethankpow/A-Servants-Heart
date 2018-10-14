import React, { Component } from 'react';
import { Card, CardTitle, Row, Col, Navbar, NavItem, Dropdown, Input } from 'react-materialize';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom'
import { bindActionCreators } from 'redux';
import {fetchProjects} from '../actions'

class Projects extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }

    componentDidMount() {
        this.props.fetchProjects()
    }



    render() {
        // if (!this.props.projects) {
        //     // <Redirect to="/"/>
        //     return (
        //         <div>loading...</div>
        //     )
        //   } else {

            return (
                <div>
                <div className='container'>
                    <Row >
                        {
                            this.props.projects.map(project => {
                                console.log(project.due_date)
                                return (
                                    <Col s={12} m={3} >
                                        <Card header={<CardTitle reveal image={project.image_URL} waves='light'/>}
                                            title={project.name}
                                            reveal={<p>{project.description}</p>}>
                                            <p><b right>Due date: {project.due_date}</b></p>
                                            <p><a href="#">Choose this Project</a></p>
                                            
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
                
            </div>
        );
    // }
    }
}

const mapStateToProps = ({projects}) =>{
    console.log('in projects compon', projects)
    return {projects}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchProjects}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Projects)

