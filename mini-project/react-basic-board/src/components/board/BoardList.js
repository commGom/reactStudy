import React, { Component } from 'react';

class BoardList extends Component {
    render() {
        const tbody = [];
        const boardList = this.props.boardList;
        for (let i = 0; i < boardList.length; i++) {
            const element =
                <tr key={boardList[i].bNo}>
                    <td>{boardList[i].bNo}</td>
                    <td><a href="" onClick={(e) => {
                        e.preventDefault();
                        this.props.readOrDelete('read', boardList[i].bNo);
                    }}>{boardList[i].title}</a></td>
                    <td>{boardList[i].writtenDate}</td>
                    <td><button onClick={() => {
                        this.props.readOrDelete('delete', boardList[i].bNo);
                    }}>Delete</button></td>
                </tr>;
            tbody.push(element);
        }
        return (
            <div>
                <h1>게시글 목록 페이지</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>글 번호</th>
                            <th>제목</th>
                            <th>작성일</th>
                            <th>비고</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tbody}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BoardList;