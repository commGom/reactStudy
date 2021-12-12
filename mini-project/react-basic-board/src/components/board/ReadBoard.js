import React, { Component } from 'react';

class ReadBoard extends Component {
    render() {
        return (
            <div>
                <h2>게시글 조회 페이지</h2>
                <button onClick={() => {
                    this.props.onChangeMode('update');
                }}> 수정하기 </button><br />
                <p>제목 : <input type="text" name="board-title" id="title" value={this.props.board.title} readOnly></input></p>
                <p>내용 : <textarea name="board-content" id="content" value={this.props.board.content} readOnly></textarea></p>
                <p>내용 : <input name="board-content" id="writtenDate" value={this.props.board.writtenDate} readOnly></input></p>

            </div>
        );
    }
}

export default ReadBoard;