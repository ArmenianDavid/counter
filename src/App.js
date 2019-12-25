import React from "react";
import Counter from "./Components/counter/Counter";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: localStorage.getItem("count") ? localStorage.getItem("count") : 0 ,
            startingCount : null,
            display : false,
        };
    }

    increment = () => {
        this.setState({
            count: +this.state.count + 1
        });
    };

    decriment = () => {
        this.setState({
            count: +this.state.count - 1
        });
    };

    startCounterFromZero = () => {
        this.setState({
            count: 0
        });
    };
    changeStartValue = (e) =>{
        this.setState({ 
            startingCount : +e.target.value ,
        })
    }
    setStartingCount = (event) =>{
        this.setState({ 
            count : this.state.startingCount ,
        })
        this.changeDisplay()
    }
    changeDisplay = () =>{
        this.setState({
            display : !this.state.display ,
        })
    }

    render() {
        localStorage.setItem("count", this.state.count);
        return (
                    <Counter
                        count={this.state.count}
                        incriment={this.increment}
                        decriment={this.decriment}
                        startCounterFromZero={this.startCounterFromZero}
                        changeStartValue={this.changeStartValue}
                        setStartingCount={this.setStartingCount}
                        display = {this.state.display}
                        changeDisplay = {this.changeDisplay}
                        />
        );
    }
}

export default App;
