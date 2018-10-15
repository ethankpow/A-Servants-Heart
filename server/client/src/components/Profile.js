import React, { Component } from 'react';
import { Collection, CollectionItem} from 'react-materialize';
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
        return this.props.projects.map(project => {
            return (
                <div className="project-container">
                    <div className="project-image">
                        <img className="image-sizes" src={ project.image_URL } alt={project.name}/>
                    </div>
                    <div className="project-details">
                        <ul>
                            <li>Name: {project.name}</li>
                            <li>Due:{project.due_date}</li>
                            <li>Description: {project.description}</li>
                            <Input onClick={() => this.completedProject(project.id)} checked={project.completed} name='group1' type='checkbox' value='Completed' label='Completed' />
                        </ul>
                    </div>
                </div>
            )
        })
    }
    render(){
        if(this.props.projects.length > 0 ) {
            return (
                <div className="all-projects full-container">
                    {console.log(this.props.projects)}
                    {this.showProjects()}
                </div>
            )
        } else {
            return (
                <div className="full-container"> Is Loading </div>
            )
        }

    }
}

const mapStateToProps = ({projects}) =>{
    return {projects}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({userProjects}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)