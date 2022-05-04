import React from "react";

class ClassState extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            error: true,
        }
    }
    
    render(){
        return (
            <div>
                <h2>Delete { this.props.name }</h2>
                <p>Please, wirte your security code</p>

                {this.state.error && (
                    <p>Error: your code is wrong</p>
                )}

                <input placeholder="Security"/>
                <button
                    onClick={()=> this.setState({ error: !this.state.error })}
                >
                    Submit
                </button>
            </div>
        )
    }
}

export { ClassState }