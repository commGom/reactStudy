import React, { Component } from 'react';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'welcome',
            board: [
                { cNo: 1, title: '첫번째 게시글', content: '첫번째 내용물', writtenDate: new Date().toString() }
            ]
        };
    }
    render() {
        return (
            <div>
                <h1>게시판 페이지</h1>
            </div>
        );
    }
}

export default Board;