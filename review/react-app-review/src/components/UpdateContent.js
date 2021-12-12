import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            desc: this.props.desc
        }
    }
    render() {
        return (
            <div>
                <h1>수정하기</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const title = e.target.title.value;
                    const desc = e.target.desc.value;
                    this.props.onSubmit(title, desc);
                }}>
                    <p>제목 : <input type="text" name="title" value={this.state.title}
                        onChange={(e) => {
                            this.setState({ title: e.target.value });
                        }}></input></p>
                    <p>내용 : <textarea name="desc" name="desc" value={this.state.desc}
                        onChange={(e) => {
                            this.setState({ desc: e.target.value });
                        }}></textarea></p>
                    <p><input type="submit" value="수정완료"></input></p>
                </form>
            </div>
        );
    }
}

export default UpdateContent;