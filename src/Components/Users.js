import React, {useState} from "react";
import styles from './Users.module.css';
import User from "./User";

const Users = () =>{
    const [showUsers, setShowUsers] = useState(false);
    const dummyUsers = [
        {id:'m1', name:'Max'},
        {id:'m2', name:'Manuel'},
        {id:'m3', name:'Jullie'},
    ]
    const toggleShowUsersHandler = () =>{
        setShowUsers((prevState) => !prevState)
    }
    const userList = dummyUsers.map((user) => <User key={user.id} name={user.name}/>)

    return <div className={styles.users}>
        <button  onClick={toggleShowUsersHandler} className={styles.button}>{showUsers ? 'Hide': 'Show'} Users</button>
        <ul className={styles.userList}>
            {showUsers && userList}

        </ul>
    </div>
} 

export default Users;