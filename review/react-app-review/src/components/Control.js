import React, { Component } from 'react';

class Control extends Component {

    render() {
        const CRUD = this.props.CRUD;
        const options = [];
        for (let option of CRUD) {
            const element = <li key={option}><a href="" onClick={(e) => {
                e.preventDefault();
                this.props.onChangeMode(option);
            }}>{option}</a></li>
            options.push(element);
        }
        return (
            <div>
                <ul>
                    {options}
                </ul>
            </div>
        );
    }
}

export default Control;