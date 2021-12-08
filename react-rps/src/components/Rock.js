import React, { Component } from 'react';
import rock from '../assets/images/rock.png';
class Rock extends Component {
    render() {
        return (
            <div>
                <img src={rock} alt="" />
            </div>
        );
    }
}

export default Rock;