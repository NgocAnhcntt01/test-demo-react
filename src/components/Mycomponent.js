import React from "react";

class MyComponent extends React.Component{

    state = {
        name : 'Ngoc Anh',
        address: 'Thai Nguyen',
        age: 23
    }
    render(){
        return(
            <div>My name is {this.state.name} and I'm from {this.state.address}</div>
        );
    }
}

export default MyComponent;