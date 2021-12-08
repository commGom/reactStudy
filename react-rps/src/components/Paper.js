import React, { Component } from 'react';
import paper from '../assets/images/paper.png';
class Paper extends Component {
    render() {
        return (
            <img src={paper} alt="" alt=""
                onClick={() => {
                    console.log('보 : 2');
                    this.props.onSubmit(2);
                }} />
        );
    }
}

export default Paper;