import React, { Component } from 'react';
import BoardHeader from './BoardHeader';
import BoardList from './BoardList';
import BoardTOC from './BoardTOC';
import ReadBoard from './ReadBoard';
import UpdateBoard from './UpdateBoard';
import WriteBoard from './WriteBoard';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'welcome',
            curBNo: 0,
            lastId: 2,
            boardList: [
                { bNo: 1, title: '첫번째 게시글', content: '첫번째 내용물', writtenDate: new Date().toString() },
                { bNo: 2, title: '두번째 게시글', content: '두번째 내용물', writtenDate: new Date().toString() },
            ]
        };
    }
    findBoardByBNo() {
        let board;
        for (let i = 0; i < this.state.boardList.length; i++) {
            const temp = this.state.boardList[i];
            if (temp.bNo === this.state.curBNo) {
                board = temp;
                break;
            }
        }
        return board;
    }

    render() {
        const mode = this.state.mode;
        let view;
        if (mode === 'list') {
            view =
                <BoardList boardList={this.state.boardList}
                    readOrDelete={(mode, bNo) => {
                        if (mode === 'read') {
                            this.setState({ mode: mode, curBNo: bNo });
                        } else if (mode === 'delete') {
                            console.log(mode, bNo);
                            for (let i = 0; i < this.state.boardList.length; i++) {
                                const temp = this.state.boardList[i];
                                if (temp.bNo === bNo) {
                                    this.state.boardList.splice(i, 1);
                                    break;
                                }
                            }
                            this.setState({ mode: 'list', curBNo: 0 });
                        }

                    }} />
        } else if (mode === 'read') {
            const board = this.findBoardByBNo();
            view = <ReadBoard board={board}
                onChangeMode={(mode) => {
                    this.setState({ mode: mode });
                }}></ReadBoard>
        } else if (mode === 'write') {
            view = <WriteBoard write={(title, content) => {
                const lastId = this.state.lastId;
                this.state.boardList.push({ bNo: lastId + 1, title: title, content: content, writtenDate: new Date().toString() });
                console.log(this.state.boardList);
                this.setState({ mode: 'welcome', lastId: lastId + 1 });
            }}></WriteBoard>
        } else if (mode === 'update') {
            const board = this.findBoardByBNo();
            console.log('수정할 게시물 :');
            console.log(board)
            view = <UpdateBoard board={board}
                update={(title, content) => {
                    const lastId = this.state.lastId;
                    board.title = title;
                    board.content = content;
                    board.writtenDate = new Date().toString();
                    console.log(this.state.boardList);
                    this.setState({ mode: 'welcome' });
                }}></UpdateBoard>
        }
        return (
            <div>
                <BoardHeader></BoardHeader>
                <BoardTOC onChangeMode={(mode) => {
                    this.setState({ mode: mode });
                }}></BoardTOC>
                {view}
            </div>
        );
    }
}

export default Board;