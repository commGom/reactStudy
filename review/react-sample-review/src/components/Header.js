import React, { Component } from 'react';

class Header extends Component {
    render() {
        const title = this.props.title;
        return (
            <div>
                <h1>{title}</h1>
                <hr></hr>
            </div>
        );
    }
}

export default Header;