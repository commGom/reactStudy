import React from 'react';
import { useParams } from 'react-router-dom';

const ReadMember = (props) => {
    const { order } = useParams();
    const members = props.members;
    const member = members.find((member) => { return member.order == order });
    return (
        <div>
            <h1>회원정보</h1>
            <p>아이디 <input type="text" name="id" value={member.id}
                readOnly /></p>
            <p>비밀번호 <input type="text" name="password" value={member.password}
                readOnly /></p>
            <p>이름 <input type="text" name="name" value={member.name}
                readOnly /></p>
            <p>연락처 <input type="text" name="phone" value={member.phone}
                readOnly /></p>
            <p>닉네임 <input type="text" name="nickName" value={member.nickName}
                readOnly /></p>
        </div>
    );
};

export default ReadMember;