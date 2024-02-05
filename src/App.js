import React from "react";
import UserFinder from "./Components/UserFinder";
import UsersContext from "./Components/Store/users-context";

const DUMMY_USERS = [
    {id:'m1', name:'max'},
    {id:'m2', name:'manuel'},
    {id:'m3', name:'jullie'},
]
const App = () =>{
    return <UsersContext.Provider value={
        {
        users: DUMMY_USERS,
        }
    }>
        <UserFinder />
    </UsersContext.Provider>
}

export default App;