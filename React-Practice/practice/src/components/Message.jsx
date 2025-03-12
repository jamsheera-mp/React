import { Component } from "react";


class Message extends Component{
    constructor(){
        super()
        this.state = {
            message:'Welcome visitor'
        }
    }
    changeMessgae(){
        this.setState({
            message:'Thank you for visiting'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessgae()}>Click Me</button>
            </div>
        )
    }
}

export default Message