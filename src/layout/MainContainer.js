import React, { Component } from 'react';
import Header from '../components/Header';
import Content from '../components/Content';

class MainContainer extends Component {
    render() {
        return(
            <div className="container">
                <Header/>
                <Content/>
            </div>
        )
    }
}

export default MainContainer;