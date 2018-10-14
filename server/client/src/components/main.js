import React, { Component } from 'react';
import { Button,Parallax, NavItem, Dropdown, Col, Card, Icon, CardTitle} from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetchOrganizations, fetchProjects, fetchProjectsByOrgId} from '../actions'
import {navlink, NavLink} from 'react-router-dom'
// import { Route , withRouter} from 'react-router-dom';





class Main extends Component {
    constructor(props){
        super(props)
    }
    
    
    
    componentWillMount(){
        this.props.fetchOrganizations()
    }

    handleClick(id) {
        console.log(id)
        this.props.fetchProjectsByOrgId(id)
        this.props.history.push('/projects/:orgid')
    }
 
    render() {
        if(this.props.orgs === 0){
            return null
        } else {

            return (
     
                <div>
                    <div>
                        <div className="overlay">
                             <div className="overlay-image">
                                <Parallax  imageSrc="https://www.grammy.com/sites/com/files/styles/news_detail_header/public/gettyimages-840756000.jpg?itok=JLQPrR94"/><Icon bottom>expand_more</Icon>
                            </div>
                                <div className="overlay-button center-align" >
                                <Dropdown trigger={
                                        <Button>Search Organizations</Button>
                                    }>
                                        { this.props.orgs.map(org => 
                                            <NavItem onClick={()=> this.handleClick(org.id)}>{org.name}</NavItem>
    
                                        )}
                                    </Dropdown>
                                </div>
                        </div>
    
                                <div className="section white">
                                    <div className="row container">
                                    <Col s={12} m={4} >
                                        <Card header={<CardTitle reveal image={"https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&h=350"} waves='light'/>}
                                            title="Reorganize Library Bookshelves"
                                            reveal={<p>After recent restoration the town would like to invite volunteers to help revamp our library</p>}>
                                            <p><b right>Due date: 10/22/2018 </b></p>
                                            <p><a href="#">Choose this Project</a></p>
                                            
                                        </Card>
                                    </Col>
                                    <Col m={4} s={12}>
                                        <Card className='blue-grey darken-1' textClassName='white-text' title='About Us' actions={[<a href='#'>Learn More</a>]}>
                                        ASH seeks to drive community engagement through service. We are here to fill the void between those who wish serve locally and organizations that could use volunteer help.
                                        </Card>
                                    </Col>
                                    <Col s={12} m={4} >
                                        <Card header={<CardTitle reveal image={"http://blog.thedetroithub.com/wp-content/uploads/2011/05/KARP1756-City-Year-and-AmeriCorps-Groups-cleaning.jpg"} waves='light'/>}
                                            title="Downtown Park Cleanup"
                                            reveal={<p>We need willing individuals to help clean up Downtown Park</p>}>
                                            <p><b right>Due date: 10/30/2018</b></p>
                                            <p><a href="#">Choose this Project</a></p>
                                            
                                        </Card>
                                    </Col>
                                    </div>
                                </div>
                            <Parallax imageSrc="https://www.lawpracticetoday.org/wp-content/uploads/2014/09/Benefits-of-Community-Service-Cropped.jpg"/>
                    </div>
                </div>
            );
        }
        
    }
  }
  const mapStateToProps = ({orgs}) => {
      return {orgs}
  }
  const mapDispatchToProps = (dispatch) => {
      return bindActionCreators({fetchOrganizations, fetchProjects, fetchProjectsByOrgId}, dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Main)

  