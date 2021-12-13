import React from 'react';
import { Link } from 'react-router-dom';

const MemberList = ({ members }) => {
    const memberList = [];
    for (let i = 0; i < members.length; i++) {
        const element =
            <tr key={members[i].order}>
                <td>{members[i].order}</td>
                <td>{members[i].name}</td>
                <td>{members[i].id}</td>
                <td>{members[i].password}</td>
                <td>{members[i].phone}</td>
                <td>{members[i].nickName}</td>
                <td><Link to={`/readMember/${members[i].order}`}><button>Read</button></Link></td>
                <td><Link to={`/updateMember/${members[i].order}`}><button>Update</button></Link></td>
                <td><button>Delete</button></td>
                {/* <td><button>Update</button></td>
                <td><button>Del</button></td> */}
            </tr>;
        memberList.push(element);
    }
    return (
        <div>
            <h1>회원 목록</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>아이디</th>
                        <th>비밀번호</th>
                        <th>연락처</th>
                        <th>닉네임</th>
                        <th colSpan="3">관리</th>
                    </tr>
                </thead>
                <tbody>
                    {memberList}
                </tbody>
            </table>
        </div>
    );
};

export default MemberList;