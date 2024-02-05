import { Component } from "react";
import styles from "./ErrorBoundary.module.css";

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = {
            hasError:false,
        }
    }
    toggleError(){
        this.setState({hasError:false})
    }
    componentDidCatch(error){
        console.log(error);
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){
            return <div className={styles.error}>
                <p >Something Went wrong</p>
                <button className={styles.button} onClick={this.toggleError.bind(this)}>Click me</button>

            </div>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;