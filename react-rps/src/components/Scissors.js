import React, { Component } from 'react';
import scissors from '../assets/images/scissors.png';

class Scissors extends Component {
    render() {
        return (
            <div>
                <img src={scissors} alt=""></img>
            </div>
        );
    }
}

export default Scissors;