import React, { Component } from 'react';
import rock from '../images/rock.png';
class Rock extends Component {
    render() {
        return (
            <img src={rock} alt=""
                onClick={() => {
                    this.props.onSubmit(1);
                }} />
        );
    }
}

export default Rock;