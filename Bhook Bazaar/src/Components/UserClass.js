import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {name, location} = this.props
        return (
            <div className="user-class">
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
            </div>
        )
    }
}
export default UserClass;