import React, { Component } from 'react';

class TOC extends Component {
    render() {
        const changePage = this.props.changePage;
        const contents = this.props.contents;
        const list = [];
        for (let i = 0; i < contents.length; i++) {
            const element = <li key={contents[i].id}>
                <a href={contents[i].id + ".html"}
                    onClick={
                        (event) => {
                            event.preventDefault();
                            changePage(contents[i].id);
                        }
                    }>
                    {contents[i].title}
                </a>
            </li>;
            list.push(element);
        }
        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default TOC;