import React, { Component } from 'react';

class WriteBoard extends Component {
    render() {
        return (
            <div>
                <h2>게시글 작성 페이지</h2>
                <form>
                    <p>제목 : <input type="text" name="board-title" id="title"></input></p>
                    <p>내용 : <textarea name="board-content" id="content"></textarea></p>
                    <button type="submit" onClick={(e) => {
                        e.preventDefault();
                        const title = document.querySelector("#title").value;
                        const content = document.querySelector("#content").value;
                        this.props.write(title, content);
                    }}>작성 완료</button>
                </form>
            </div>
        );
    }
}

export default WriteBoard;