import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateMember = (props) => {
    const { order } = useParams();
    const members = props.members;
    const mem = members.find((member) => { return member.order == order });

    const [member, setMember] = useState(mem);

    return (
        <div>
            <div>
                <h1>회원정보 수정</h1>
                <form>
                    <p>아이디 <input type="text" name="id" value={member.id}
                        readOnly /></p>
                    <p>비밀번호 <input type="text" name="password" value={member.password}
                        onChange={(e) => { setMember({ password: e.target.value }) }} /></p>
                    <p>이름 <input type="text" name="name" value={member.name}
                        onChange={(e) => { setMember({ name: e.target.value }) }} /></p>
                    <p>연락처 <input type="text" name="phone" value={member.phone}
                        onChange={(e) => { setMember({ phone: e.target.value }) }} /></p>
                    <p>닉네임 <input type="text" name="nickName" value={member.nickName}
                        onChange={(e) => { setMember({ nickName: e.target.value }) }} /></p>
                    <button type="submit">회원정보 수정</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMember;