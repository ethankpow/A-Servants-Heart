import React, { Component } from 'react';
import { Button,Parallax, Card, Row, Col, Navbar, NavItem, Dropdown } from 'react-materialize';

// const containerr = styled.div`
//  text-align: center;
// `;


class Header extends Component {
 
    render() {
        return (
 
            <div>
                <div>
                    <Parallax imageSrc="https://www.grammy.com/sites/com/files/styles/news_detail_header/public/gettyimages-840756000.jpg?itok=JLQPrR94"/>
                            <div id="dropdown-container" className="container">
                            <Dropdown trigger={
                                    <Button>Search Organizations</Button>
                                }>
                                <NavItem>Town of Fuquay</NavItem>
                                <NavItem>Town of Cary</NavItem>
                                <NavItem divider />
                                <NavItem>Town of Apex</NavItem>
                                </Dropdown>
                            </div>
                            <div className="section white">
                                <div className="row container">
                                </div>
                            </div>
                        <Parallax imageSrc="http://lssin.org/wp-content/uploads/hurricane-1.jpg"/>
                </div>
            </div>
        );
    }
  }

  export default Header