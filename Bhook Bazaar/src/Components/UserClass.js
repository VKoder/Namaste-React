import React from "react"


class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0,
        }
    }
    render(){
        const {name, location} = this.props;
        const {count} = this.state
        return (
            <div className="user-class">
                <h2>Count: {count}</h2>
                <button onClick={()=>{3
                    this.setState=({
                        count: this.state.count ++,
                    });
                    console.log(count)
                }}>Increment</button>
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
            </div>
        )
    }
}
export default UserClass;