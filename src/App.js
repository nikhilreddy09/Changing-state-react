import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        //binding the function 
        this.handleClick = this.handleClick.bind(this)
    }
     handleClick() {
         //input is prevstate object and returning new count
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                {/* calling handleClick function */}
                <button onClick = { this.handleClick }>Change!</button>
            </div>
        )
    }
}

export default App
