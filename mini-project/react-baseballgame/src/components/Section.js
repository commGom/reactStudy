import React, { Component } from 'react';

class Section extends Component {
    render() {
        const contents = this.props.contents;
        const list = [];
        for (let i = 0; i < contents.length; i++) {
            const element = <h4 key={i}>{contents[i]}</h4>;
            list.push(element);
        }
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default Section;