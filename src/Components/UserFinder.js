import React, { useEffect, useState } from "react";
import styles from './UserFinder.module.css';
import Users from "./Users";

const DUMMY_USERS = [
    {id:'m1', name:'max'},
    {id:'m2', name:'manuel'},
    {id:'m3', name:'jullie'},
]

const UserFinder = () => {
    const [searchTerm,setSearchTerm] = useState('');
    const [filteredUsers,setFilteredUsers] = useState([]);

    useEffect(()=>{
        setFilteredUsers(DUMMY_USERS.filter((user)=> user.name.includes(searchTerm)))
    },[searchTerm])

    const onSearchHandler = (event) =>{
        setSearchTerm(event.target.value);
    }

    return <React.Fragment>
        <div className={styles.finder}>
            <input type="search" onChange={onSearchHandler}/>
        </div>
        <Users users={filteredUsers}/>
    </React.Fragment>
}

export default UserFinder;