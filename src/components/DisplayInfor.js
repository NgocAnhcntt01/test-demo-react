import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

// class DisplayInfor extends React.Component {


//     render() {
//         const { listUsers } = this.props;
//         return (
//             <div className='display-infor-container'>

//                 {true &&
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 20 ? "red" : "green"}>
//                                     <div>
//                                         <div>My name's {user.name}</div>
//                                         <div>My age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>

//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true)

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }
    useEffect(() => { console.log('aaav') },[])
    console.log('aaa')
    return (
        <div className='display-infor-container'>
            <button onClick={() => handleShowHideListUser()}>{isShowHideListUser === true ? 'Hide list users' : 'Show list user'}</button>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 20 ? "red" : "green"}>
                                <div>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>

                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default DisplayInfor;