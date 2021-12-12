import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        return (
            <div>
                <h1>추가하기</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const title = e.target.title.value;
                    const desc = e.target.desc.value;
                    this.props.onSubmit(title, desc);
                }}>
                    <p>제목 : <input type="text" name="title"></input></p>
                    <p>내용 : <textarea name="desc"></textarea></p>
                    <p><input type="submit" value="입력완료"></input></p>
                </form>
            </div>
        );
    }
}

export default CreateContent;