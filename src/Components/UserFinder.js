import React, { Component } from "react";
import styles from './UserFinder.module.css';
import Users from "./Users";

const DUMMY_USERS = [
    {id:'m1', name:'max'},
    {id:'m2', name:'manuel'},
    {id:'m3', name:'jullie'},
]

class UserFinder extends Component {

    constructor() {
        super();
        this.state = {
            searchTerm: '',
            filteredUsers: DUMMY_USERS,
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.searchTerm !== this.state.searchTerm)
        {
            this.setState({filteredUsers: DUMMY_USERS.filter((user)=>user.name.includes(this.state.searchTerm))})
        }
    }

    onSearchHandler(event){
        this.setState({searchTerm: event.target.value})
    }


    render(){
        return <React.Fragment>
        <div className={styles.finder}>
            <input type="search" onChange={this.onSearchHandler.bind(this)}/>
        </div>
        <Users users={this.state.filteredUsers}/>
    </React.Fragment>

    }

}



/*const UserFinder = () => {
    const [searchTerm,setSearchTerm] = useState(DUMMY_USERS);
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
}*/

export default UserFinder;