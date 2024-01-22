import React, {Component} from "react";
import styles from './Users.module.css';
import User from "./User";

const DUMMY_USERS = [
    {id:'m1', name:'Max'},
    {id:'m2', name:'Manuel'},
    {id:'m3', name:'Jullie'},
]

class Users extends Component{
    constructor(){
        super();
        this.state = {
            showUsers: false,
        }
    }
    toggleShowUsersHandler(){
        this.setState((prevState) => {
            return {
                showUsers: !prevState.showUsers,
            }
        })
    }

    render(){
        const userList = DUMMY_USERS.map((user) => <User key={user.id} name={user.name}/>)
        return <div className={styles.users}>
        <button  onClick={this.toggleShowUsersHandler.bind(this)} className={styles.button}>{this.state.showUsers ? 'Hide': 'Show'} Users</button>
        <ul className={styles.userList}>
            {this.state.showUsers && userList}

        </ul>
    </div>
    }
}

/*const Users = () =>{
    const [showUsers, setShowUsers] = useState(false);

    const toggleShowUsersHandler = () =>{
        setShowUsers((prevState) => !prevState)
    }
    const userList = DUMMY_USERS.map((user) => <User key={user.id} name={user.name}/>)

    return <div className={styles.users}>
        <button  onClick={toggleShowUsersHandler} className={styles.button}>{showUsers ? 'Hide': 'Show'} Users</button>
        <ul className={styles.userList}>
            {showUsers && userList}

        </ul>
    </div>
} */

export default Users;