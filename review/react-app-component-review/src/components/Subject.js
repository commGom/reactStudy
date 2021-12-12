import React from 'react';

const Subject = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.sub}
        </div>
    );
};

export default Subject;