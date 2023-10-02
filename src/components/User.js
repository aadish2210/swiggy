import { useState } from "react"
const User = ({name}) => {
  const [count , setCount] = useState(0);

  
  return (
    <div className="user-card border border-solid border-black w-[90%] p-2 m-5 flex items-center flex-col hover:bg-orange-100 shadow-md">
        <h1>Name : {name}</h1>
        <h2>Location : Rajkot</h2>
        <h2 className="font-semibold">Count Function : {count}</h2> 
        <button className="bg-lime-200 p-2 m-2 w-[100px] hover:bg-lime-300" onClick={()=>{setCount(count+1)}}>+</button>
        <button className="bg-lime-200 p-2 m-2 w-[100px] hover:bg-lime-300" onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default User