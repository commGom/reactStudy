import React from 'react';

const RegisterMember = (props) => {
    const onRegister = props.onRegister;
    return (
        <div>
            <h1>회원가입</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                const id = e.target.id.value;
                const password = e.target.password.value;
                const name = e.target.name.value;
                const phone = e.target.phone.value;
                const nickName = e.target.nickName.value;
                const member = { id, password, name, phone, nickName };
                onRegister(member);
            }}>
                <p>아이디 <input type="text" name="id" /></p>
                <p>비밀번호 <input type="text" name="password" /></p>
                <p>이름 <input type="text" name="name" /></p>
                <p>연락처 <input type="text" name="phone" /></p>
                <p>닉네임 <input type="text" name="nickName" /></p>
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
};

export default RegisterMember;