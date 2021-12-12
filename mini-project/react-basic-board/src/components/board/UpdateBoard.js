import React, { Component } from 'react';

class UpdateBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.board.title,
            content: this.props.board.content,
            writtenDate: this.props.board.writtenDate
        }
    }
    render() {
        return (
            <div>
                <form>
                    <h2>게시글 수정 페이지</h2>
                    <p>제목 : <input type="text" name="board-title" id="title" value={this.state.title}
                        onChange={(e) => {
                            this.setState({ title: e.target.value });
                        }}></input></p>
                    <p>내용 : <textarea name="board-content" id="content" value={this.state.content}
                        onChange={(e) => {
                            this.setState({ content: e.target.value });
                        }}></textarea></p>
                    <button type="submit" onClick={(e) => {
                        e.preventDefault();
                        const title = document.querySelector("#title").value;
                        const content = document.querySelector("#content").value;
                        this.props.update(title, content);
                    }}>수정 완료</button>
                </form>
            </div>
        );
    }
}

export default UpdateBoard;