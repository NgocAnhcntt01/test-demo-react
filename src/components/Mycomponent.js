import React from "react";

class MyComponent extends React.Component{

    state = {
        name : 'Ngoc Anh',
        address: 'Thai Nguyen',
        age: 23
    };
    handleClick = (event) => {
        console.log('My name is ', this.state.name)

        this.setState({
            name: 'Ngoc Mai',
            age: Math.floor((Math.random()*100) + 1)
        })
    }
    handleOnMouseClick() {
        console.log('Hello123')
    }
    render(){
        return(
            <div>My name is {this.state.name} and I'm {this.state.age}
            <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
            <button onMouseOver={this.handleOnMouseClick}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;