import React, { Component } from 'react';

class BoardTOC extends Component {
    render() {
        const changeMode = this.props.onChangeMode;
        return (
            <ul>
                <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    changeMode('list');
                }}>게시글 목록 보기</a></li>
                <li><a href="" onClick={(e) => {
                    e.preventDefault()
                    changeMode('write')
                }}>게시글 작성하기</a></li>
            </ul>
        );
    }
}

export default BoardTOC;