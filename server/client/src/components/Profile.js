import React, { Component } from 'react';
import {  Card, CardTitle, Col, Row} from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {userProjects} from '../actions'
import axios from 'axios'
import { Input } from 'react-materialize';



class Profile extends Component {
    constructor(props){
        super(props)
        this.props.userProjects()
    }

   async completedProject(id){
       console.log('clicked')
        await axios({url: `/api/projects/completed/${id}`, method: 'put'})
    }
    showProjects(){

        let renderSections = [];

        for(let i = 0; i < this.props.projects.length; i+=4) {

            let inside = [];
            for(let j = i; j < this.props.projects.length && j < (i + 4); j++) {
                let project = this.props.projects[j];

                inside.push((
                    <Col s={12} m={3}>
                    <Card className='small'
                    header={<CardTitle image={project.image_URL}>{project.name}</CardTitle>} 
                    actions={[<Input onClick={() => this.completedProject(project.id)} checked={project.completed} name='group1' type='checkbox' value='Completed' label='Completed' />]}>
                    {project.description} 
                </Card>
                </Col>
                ))
            }

            let renderSection = (
                <Row>
                    {
                        inside
                    }
                </Row>
            )

            renderSections.push(renderSection)
        }

        return renderSections;

        // return this.props.projects.map( (project, index) => {
        //     return (
        //         <Col s={12} m={3}>

        //             <Card className='small'
        //                 header={<CardTitle image={project.image_URL}>{project.name}</CardTitle>} 
        //                 actions={[<Input onClick={() => this.completedProject(project.id)} checked={project.completed} name='group1' type='checkbox' value='Completed' label='Completed' />]}>
        //                 {project.description} 
        //             </Card>
        //         </Col>
        //     )
        // })
    }
    render(){
        if(this.props.projects.length > 0 ) {
            return (
                <div>

                <div><h3>{this.props.login.name}'s Projects</h3></div>
                <div className="container">
                        {console.log(this.props.projects)}
                        {console.log(this.showProjects())}
                        {this.showProjects()}
                </div>
                </div>
            )
        } else {
            return (
                <h3 className="full-container"> does not have any current projects. Please go to <a href='/projects'>Projects</a> to get started</h3>
            )
        }

    }
}

const mapStateToProps = ({projects, login}) =>{
    return {projects, login}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({userProjects}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)





{/* <div className="project-container">
<div className="project-image">
    <img className="image-sizes" src={ project.image_URL } alt={project.name}/>
</div>
<CardPanel className="teal lighten-4 black-text">
<div className="project-details">
    <ul>
        <li>Name: {project.name}</li>
        <li>Due:{project.due_date}</li>
        <li>Description: {project.description}</li>
        <Input onClick={() => this.completedProject(project.id)} checked={project.completed} name='group1' type='checkbox' value='Completed' label='Completed' />
    </ul>
</div>
</CardPanel>
</div> */}
