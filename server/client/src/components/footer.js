import React, { Component } from 'react';
import { Row, Footer } from 'react-materialize';


class FooterComp extends Component {
    // constructor(){
    //     super()
    // }
    render(){

        return(
            <div className="container">
            <Row>

                <Footer s={12} id="my-footer" copyrights="copy 2018 Copyright Text"
                    moreLinks={
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    }
                    links={
                        <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                    }
                    className='example'
                    >
                        <h5 className="white-text">A Servants Heart</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </Footer>
            </Row>
            
        </div>
        )
    }
}

export default FooterComp