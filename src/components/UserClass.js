import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            count : 0,
        }
    }

    render(){
        return (
            <div className="user-card border border-solid border-black w-[90%] p-2 m-5 flex items-center flex-col  hover:bg-orange-100 shadow-md ">
                <h1>Name : {this.props.name}</h1>
                <h2>Location : Rajkot</h2>
                <h2>Count Class: {this.state.count}</h2>
                <button onClick={()=>{this.setState({count : this.state.count +1})}} className="bg-lime-200 p-2 m-2 w-[100px] hover:bg-lime-300">+</button>
                <button onClick={()=>{this.setState({count : 0})}} className="bg-lime-200 p-2 m-2 w-[100px] hover:bg-lime-300">Reset</button>
            </div>
          )
    }
}

export default UserClass;