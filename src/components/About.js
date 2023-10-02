import User from "./User"
import UserClass from "./UserClass"

const About = () => {
  return (
    <div className="bg-lime-100 flex items-center flex-col">
        <h1 className="p-3 text-lg font-semibold">About Us</h1>
        <h2>This webapp is created by Aadish</h2>
        <User name={"Aadish (function)"} />
        <UserClass name={"Aadish (class)"}/>
    </div>
  )
}

export default About