import User from "./User"
import UserClass from "./UserClass"

const About = () => {
  return (
    <div>
        <h1>About Us</h1>
        <h2>This webapp is created by Aadish</h2>
        <User name={"Aadish (function)"} />
        <UserClass name={"Aadish (class)"}/>
    </div>
  )
}

export default About