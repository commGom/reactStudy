import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet,
    useParams
} from 'react-router-dom';
import MemberList from './MemberList';
import ReadMember from './ReadMember';
import RegisterMember from './RegisterMember';
import UpdateMember from './UpdateMember';
const Member = () => {
    const [order, setOrder] = useState(0);
    const [members, setMembers] = useState([]);
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to='/registerMember'>회원가입</Link></li>
                    <li><Link to='/memberList'>회원목록보기</Link></li>
                </ul>
            </div>

            <Routes>
                <Route path="/registerMember"
                    element={<RegisterMember
                        onRegister={(member) => {
                            member.order = order + 1;
                            setOrder(order + 1);
                            console.log(member);
                            console.log(members.concat(member))
                            setMembers(members.concat(member));
                            console.log(order, members);
                        }}></RegisterMember>}></Route>
                <Route path="/memberList" element={<MemberList members={members}></MemberList>}></Route>
                <Route path="/updateMember/:order" element={<UpdateMember members={members}></UpdateMember>}></Route>
                <Route path="/readMember/:order" element={<ReadMember members={members}></ReadMember>}></Route>
            </Routes>
        </BrowserRouter >
    );
};

export default Member;