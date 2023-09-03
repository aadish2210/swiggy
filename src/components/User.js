import { useState } from "react"
const User = ({name}) => {
  const [count , setCount] = useState(0);

  
  return (
    <div className="user-card">
        <h1>Name : {name}</h1>
        <h2>Location : Rajkot</h2>
        <h2>Count Function : {count}</h2> 
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default User