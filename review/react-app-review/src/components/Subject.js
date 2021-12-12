import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1 onClick={this.props.onChangeMode}>{this.props.title}</h1>
                    {this.props.sub}
                </header>
            </div>
        );
    }
}

export default Subject;