import React, { Component } from 'react';
import { Button, Card, CardTitle, Row, Col, Navbar, NavItem, Dropdown, Input } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Projects extends Component {
    constructor(){
        super()

    }



    render() {
        
        return(
            <div>
            <div className='container'>
                <Row >
                    <Col s={6} m={3}>
                        <Card header={<CardTitle reveal image={"https://images.pexels.com/photos/128303/pexels-photo-128303.jpeg?auto=compress&cs=tinysrgb&h=350"} waves='light'/>}
                            title="Card Title"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </Col>
                </Row>
                <Row >
                    <Col s={6} m={3}>
                        <Card header={<CardTitle reveal image={"https://images.pexels.com/photos/128303/pexels-photo-128303.jpeg?auto=compress&cs=tinysrgb&h=350"} waves='light'/>}
                            title="Card Title"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='container'>
                 <Row >
                    <Col s={6} m={3}>
                        <Card header={<CardTitle reveal image={"https://images.pexels.com/photos/128303/pexels-photo-128303.jpeg?auto=compress&cs=tinysrgb&h=350"} waves='light'/>}
                            title="Card Title"
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                            <p><a href="#">This is a link</a></p>
                        </Card>
                    </Col>
                </Row>
            </div>
            </div>
        )
    }
}
const mapStateToProps = ({projects}) =>{
    return {projects}
}
export default connect(mapStateToProps, null)(Projects)

