import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.result}</h1>
            </div>
        );
    }
}

export default Result;