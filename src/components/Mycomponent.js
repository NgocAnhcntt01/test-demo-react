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