import React from 'react';

const TOC = (props) => {
    const contents = props.contents;
    const list = [];
    for (let i = 0; i < contents.length; i++) {
        const element = <li key={contents[i].id}><a href={contents[i].id + ".html"}>{contents[i].title}</a></li>;
        list.push(element);
    }
    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default TOC;