import './DescInput.css';
import { Component } from 'react';
class DescInput extends Component {
    render() {
        return (
            <form className='desc-input'
                onSubmit={(e) => {
                    e.preventDefault();
                    this.props.onSubmit(e.target.words.value);
                    e.target.words.value = "";
                }
                }>
                <input name="words" type='text' />
                <button type='submit'>메모</button>
            </form>
        );
    }
}
export default DescInput;