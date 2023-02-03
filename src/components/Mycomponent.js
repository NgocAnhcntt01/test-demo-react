import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: 'Ngoc Anh', age: "23" },
//             { id: 2, name: 'Ngoc Mai', age: "24" },
//             { id: 3, name: 'Ngoc Ha', age: "16" }
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }
//     handleDeleteUser = (userId) =>{
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }

//     render() {
//         return (
//             <>
//                 <div>
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br />
//                     <DisplayInfor
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser = {this.handleDeleteUser}
//                     />
//                 </div>
//             </>
//         );
//     }
// }

const MyComponent = (props) =>{
    const [listUsers, setListUsers] = useState([
        { id: 1, name: 'Ngoc Anh', age: "23" },
        { id: 2, name: 'Ngoc Mai', age: "24" },
        { id: 3, name: 'Ngoc Ha', age: "16" }
    ])


    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }
    const handleDeleteUser = (userId) =>{
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone)
    }
    return (
            <>
                <div>
                <p>Các bạn vui lòng Inbox qua Fanpage Facebook Hỏi Dân IT:&nbsp; facebook(chấm)com/askITwithERIC</p><p>để được hướng dẫn cài đặt dự án Backend.</p><p><strong>Cú pháp tin nhắn:</strong></p><p>UDEMY_IDENTIFY = &lt;điền_vào_email (hoặc số điện thoại) của tài khoản dùng để đăng nhập Udemy&gt;</p><p>UDEMY_NAME = &lt;điền_vào_tên_hiển_thị_của_bạn_trên_Udemy&gt;</p><p>NỘI_DUNG = REACT-ULTIMATE-HƯỚNG-DẪN-CÀI-ĐẶT-BACKEND</p><p><strong>Ví dụ:</strong></p><p>UDEMY_IDENTIFY = eric@gmail.com</p><p>UDEMY_NAME = Hỏi Dân IT</p><p>NỘI_DUNG = REACT-ULTIMATE-HƯỚNG-DẪN-CÀI-ĐẶT-BACKEND</p><p>Trường hợp các bạn dùng Google/Facebook để đăng nhập Udemy, thì các bạn ghi giúp mình tên đăng nhập Google/Facebook vào phần udemy_identify</p>
                    <AddUserInfor
                        handleAddNewUser={handleAddNewUser}
                    />
                    <br />
                    <DisplayInfor
                        listUsers={listUsers}
                        handleDeleteUser = {handleDeleteUser}
                    />
                </div>
            </>
        );
}
export default MyComponent;