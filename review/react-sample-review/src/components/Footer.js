import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const descriptions = this.props.descriptions;
        const list = [];
        for (let i = 0; i < descriptions.length; i++) {
            const element = <h5 key={i}>{descriptions[i]}</h5>;
            list.push(element);
        }
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default Footer;