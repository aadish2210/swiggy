import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            count : 0,
            text : "Login",
        }
    }

    render(){
        return (
            <div className="user-card">
                <h1>Name : {this.props.name}</h1>
                <h2>Location : Rajkot</h2>
                <h2>Count Class: {this.state.count}</h2>
                <button onClick={()=>{this.setState({count : this.state.count +1})}}>+</button>
                <button onClick={()=>{this.setState({count : 0})}}>Reset</button>

                <button onClick={()=>{this.setState({text : "Logout"})}}>{this.state.text}</button>
            </div>
          )
    }
}

export default UserClass;