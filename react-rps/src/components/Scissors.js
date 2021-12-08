import React, { Component } from 'react';
import scissors from '../assets/images/scissors.png';

class Scissors extends Component {
    render() {
        return (
            <img src={scissors} alt=""
                onClick={() => {
                    console.log('가위 : 0');
                    this.props.onSubmit(0);
                }} />
        );
    }
}

export default Scissors;