import React, { Component } from 'react';
import {  Card, Col, CardTitle, Row } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetchProjectsByOrgId} from '../actions'
import axios from 'axios'


class OrgProject extends Component {
    constructor(props){
        super(props)
        
    }
    // componentDidMount(){
    //     this.props.fetchProjectsByOrgId(id)

    // }
    async selectProject(id) {
        await axios({url: `/api/chooseproject/${id}`, method: 'get'})
        window.location.reload()
    }
    
    render (){
        console.log(this.props)


        return (
            <div>
                <div className='container'>
                    <Row >
                        {
                            this.props.orgProject.map(project => {
                                console.log(project.due_date)
                                return (
                                    <Col s={12} m={3} >
                                            <Card header={<CardTitle reveal image={project.image_URL} waves='light'/>}
                                                title={project.name}
                                                reveal={<p>{project.description}</p>}>
                                                <p><b right>Due date: {project.due_date}</b></p>
                                                <p><a onClick={()=> this.selectProject(project.id)} href='#'>Choose this Project</a></p>
                                                
                                            </Card>
                                        </Col>
                                )
                            })
                        }
                    </Row>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = ({orgProject}) => {
    console.log(orgProject)
    return {orgProject}
}
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({fetchProjectsByOrgId}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrgProject)
{/* <Col s={12} m={3} >
    <Card header={<CardTitle reveal image={project.image_URL} waves='light'/>}
        title={project.name}
        reveal={<p>{project.description}</p>}>
        <p><a href="#">This is a link</a><b right>Due date: {project.due_date}</b></p>
        
    </Card>
</Col> */}