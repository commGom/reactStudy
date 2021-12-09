function makeThreeRandomNumbers() {
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 100; i++) {
        const randomNum = parseInt(Math.random() * 10);
        const temp = numArr[0];
        numArr[0] = numArr[randomNum];
        numArr[randomNum] = temp;
    }
    numArr.splice(3);
    console.log(numArr);
    return numArr;
}

function countStrikeAndBall(comArr, userArr) {
    let strike = 0;
    let ball = 0;
    //스트라이크 판별
    for (let i = 0; i < comArr.length; i++) {
        if (comArr[i] == userArr[i]) {
            strike += 1;
        }
    }
    //스트라이크 숫자를 배열에서 지우고 나서 판별
    for (let i = 0; i < comArr.length; i++) {
        const comNum = comArr[i];
        for (let j = 0; j < userArr.length; j++) {
            if (i == j) continue;
            if (comNum == userArr[j]) {
                ball += 1;
            }
        }
    }
    const result = `${strike} S ${ball} B`;
    console.log(result);
    return result;
}

const comNumbers = makeThreeRandomNumbers();
const form = document.querySelector('form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const num1 = parseInt(e.target.num1.value);
    const num2 = parseInt(e.target.num2.value);
    const num3 = parseInt(e.target.num3.value);
    console.log(num1, num2, num3);
    if (num1 != num2 || num2 != num3 || num3 != num1) {

        const userNumbers = [num1, num2, num3];
        countStrikeAndBall(comNumbers, userNumbers);
        console.log(comNumbers, userNumbers);
    } else {
        alert('중복된 숫자 사용 금지!');
    }
});