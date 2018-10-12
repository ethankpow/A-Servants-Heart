import React, { Component } from 'react';
import { Button,Parallax, NavItem, Dropdown } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetchOrganizations, fetchProjects} from '../actions'
import {navlink, NavLink} from 'react-router-dom'
// import { Route , withRouter} from 'react-router-dom';





class Main extends Component {
    constructor(props){
        super(props)
    }
    
    
    
    componentWillMount(){
        this.props.fetchOrganizations()
    }

    handleClick() {
        this.props.history.push('/projects')
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
                                <Parallax  imageSrc="https://www.grammy.com/sites/com/files/styles/news_detail_header/public/gettyimages-840756000.jpg?itok=JLQPrR94"/>
                            </div>
                                <div className="overlay-button center-align" >
                                <Dropdown trigger={
                                        <Button>Search Organizations</Button>
                                    }>
                                        { this.props.orgs.map(org => 
                                            <NavItem onClick={()=> this.handleClick()}>{org.name}</NavItem>
    
                                        )}
                                    </Dropdown>
                                </div>
                        </div>
    
                                <div className="section white">
                                    <div className="row container">
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
      console.log('in main comp', orgs)
      return {orgs}
  }
  const mapDispatchToProps = (dispatch) => {
      return bindActionCreators({fetchOrganizations, fetchProjects}, dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Main)

  