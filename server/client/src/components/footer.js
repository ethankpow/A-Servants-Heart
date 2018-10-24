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

                <Footer s={12} id="my-footer" copyrights="A Servants Heart 2018 Copyright"
                    moreLinks={
                        <a className="grey-text text-lighten-4 right" href="#!"></a>
                    }
                    
                    className='example'
                    >
                        <h5 className="white-text">A Servants Heart</h5>
                        <p className="grey-text text-lighten-4">Learn more about how you can serve your community by signing up</p>
                </Footer>
            </Row>
            
        </div>
        )
    }
}

export default FooterComp