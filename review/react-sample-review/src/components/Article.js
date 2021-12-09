import React, { Component } from 'react';

class Article extends Component {
    render() {
        const examples = this.props.examples;
        const th = <tr><td><div><strong>{examples.th1}</strong></div></td><td colSpan="3"><div><strong>{examples.th2}</strong></div></td><td><div><strong>{examples.th3}</strong></div></td></tr>;
        const tbody = [];
        for (let i = 0; i < examples.tries.length; i++) {
            const element = <tr>
                <td>
                    <div><strong>{examples.tries[i].trycount}</strong></div>
                </td>
                <td>
                    <div>{examples.tries[i].firstNum}</div>
                </td>
                <td>
                    <div>{examples.tries[i].secondNum}</div>
                </td>
                <td>
                    <div>{examples.tries[i].thirdNum}</div>
                </td>
                <td>
                    <div>{examples.tries[i].result}</div>
                </td>
            </tr>;
            tbody.push(element);
        }
        return (
            <div>
                <table border="1">
                    <tbody>
                        {th}
                        {tbody}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Article;