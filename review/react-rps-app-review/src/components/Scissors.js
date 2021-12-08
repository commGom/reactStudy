import React, { Component } from 'react';
import scissors from '../images/scissors.png';
class Scissors extends Component {
    render() {
        return (
            <img src={scissors} alt="가위 사진" />
        );
    }
}

export default Scissors;