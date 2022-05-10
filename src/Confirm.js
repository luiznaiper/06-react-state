import React from "react";

class Confirm extends React.Component{
    componentWillUnmount(){
        console.log('willUnmount Confirm')
    }
    render(){
        return (
            <React.Fragment>
            <p>Confirm</p>
            <button>Yes</button>
            <button>No</button>
            </React.Fragment>
        )
    }
}

export { Confirm }