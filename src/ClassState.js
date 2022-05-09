import React from "react";
import { Loading } from './Loading'

const SECURITY_CODE = 'paradigm'

class ClassState extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: '',
            error: false,
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
                
                if(SECURITY_CODE === this.state.value){
                    this.setState({ error: false, loading: false })
                } else {
                    this.setState({ error: true, loading: false })
                }
                
                console.log('Endind setTimeout')
            }, 3000)
        }
    }

    render(){
        return (
            <div>
                <h2>Delete { this.props.name }</h2>
                <p>Please, wirte your security code</p>

                {(this.state.error && !this.state.loading) && (
                    <p>Error: your code is wrong</p>
                )}

                {this.state.loading && (
                    <Loading/>
                )}

                <input
                    placeholder="Security"
                    value={this.state.value}
                    onChange={(event) => {
                        this.setState({ value: event.target.value })
                    }}
                />
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