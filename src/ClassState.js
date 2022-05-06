import React from "react";
import { Loading } from './Loading'

class ClassState extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            error: true,
            loading: false,
        }
    }
    
    // UNSAFE_componentWillMount(){
    //     console.log('willMount')
    // }


    // componentDidMount(){
    //     console.log('didMount')
    // }

    componentDidUpdate(){
        console.log('Update')
        if(this.state.loading){
            setTimeout(()=> { 
                console.log('Validating setTimeout')
    
                this.setState({ loading: false })
                
                console.log('Endind setTimeout')
            }, 3000)
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


                {this.state.loading && (
                    <Loading/>
                )}

                <input placeholder="Security"/>
                <button
                    onClick={()=> this.setState({ loading:true })}
                > 
                    Submit
                </button>
            </div>
        )
    }
}

export { ClassState }