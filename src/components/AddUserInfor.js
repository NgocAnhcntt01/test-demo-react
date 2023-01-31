import React from "react";
class AddUserInfor extends React.Component{
    state = {
        name: '',
        address: 'Thai Nguyen',
        age: ''
    };
    // handleClick = (event) => {
    //     console.log('My name is ', this.state.name)

    //     this.setState({
    //         name: 'Ngoc Mai',
    //         age: Math.floor((Math.random() * 100) + 1)
    //     })
    // }
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    // handleOnMouseClick() {
    //     console.log('Hello123')
    // }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.handleAddNewUser({
            id: Math.floor((Math.random()*100)+1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    render(){
        return(
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => { this.handleOnChangeInput(event) }}
                    />

                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => { this.handleOnChangeAge(event) }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor;