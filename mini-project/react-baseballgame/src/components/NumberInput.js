import './DescInput.css';
import { Component } from 'react';
class NumberInput extends Component {
    render() {
        return (
            <div>
                <h2>야구 게임 숫자 입력</h2>
                <form className='number-input'
                    onSubmit={(e) => {
                        e.preventDefault();
                        const num1 = e.target.num1.value;
                        const num2 = e.target.num2.value;
                        const num3 = e.target.num3.value;
                        this.props.onSubmit(num1, num2, num3);
                        e.target.num1.value = "";
                        e.target.num2.value = "";
                        e.target.num3.value = "";
                    }}>

                    첫번째 숫자 : <input type="text" name="num1" required /><br />
                    두번째 숫자 : <input type="text" name="num2" required /><br />
                    세번째 숫자 : <input type="text" name="num3" required /><br />
                    <button type="submit">선택완료</button>
                </form>
            </div>

        );
    }
}
export default NumberInput;