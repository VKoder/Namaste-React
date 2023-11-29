import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent Compoenent Did Mount")
    }
  render() {
    console.log("Parent Render")
    return <UserClass name={"Vivek khule"} location={"Katraj, Pune"} />;
  }
}

export default About;
