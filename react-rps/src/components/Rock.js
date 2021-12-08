import React, { Component } from 'react';
import rock from '../assets/images/rock.png';
class Rock extends Component {
    render() {
        return (
            <img src={rock} alt="" alt=""
                onClick={() => {
                    console.log('바위 : 1');
                    this.props.onSubmit(1);
                }} />
        );
    }
}

export default Rock;