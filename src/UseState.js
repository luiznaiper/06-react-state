
import React from "react";

const SECURITY_CODE = 'paradigm'

function UseState({ name }){
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        confirmed: false,
        deleted: false,
    })

    const onConfirm = () => {
        setState({
            ...state,
            loading: false,
            error: false,
            confirmed: true,
        })
    }

    const onChangeInput = (newValue) =>{
        setState({
            ...state,
            value:newValue,
        })
    }

    const onError = () =>{
        setState({
            ...state,
            error: true,
            loading: false,
        })
    }

    const onCheck = ()=>{
        setState({
            ...state,
            loading: true,
        })
    }

    const onDelete =() => {
        setState({
            ...state,
            deleted: true
        })
    }

    const onReset = () => {
        setState({
            ...state,
            confirmed: false,
            deleted: false,
            value: ''
        })
    }

    console.log(state.value)
    
    React.useEffect(() => {
      console.log('Starting effect')

        if(state.loading){
            setTimeout(()=> { 
                console.log('Validating setTimeout')

                if(state.value === SECURITY_CODE){
                    onConfirm()
                } else{
                    onError()
                }                

                console.log('Endind setTimeout')
            }, 3000)
        }

      console.log('Ending effect')
    
    },[state.loading])
    

    if(!state.deleted && !state.confirmed){
        return (
            <div>
                    <h2>Delete  { name }</h2>
                    <p>Please, wirte your security code</p>
    
                    { (state.error && !state.loading) && (
                        <p>Error: your code is wrong</p>
                    ) }
                    { state.loading &&(
                        <p>Loading...</p>
                    )}
    
                    <input
                         placeholder="Security Code"
                         value={state.value}
                         onChange={(event) => {
                            onChangeInput(event.target.value)
                          }}
                    />
                    <button
                        onClick={() =>  {
                            onCheck()
                        }}
                    >
                        Submit
                    </button>
            </div>
        )
    } else if (state.confirmed && !state.deleted) {
        return(
            <React.Fragment>
            <p>Are you sure you want to delete¡</p>
            <button
                onClick={()=> {
                    onDelete()
                }}
            >
                Yes, delete
            </button>
            <button
                onClick={()=> {
                    onReset()
                }}
            >
                No, don't delete
            </button>
            </React.Fragment>
            
        )
    } else {
        return(
            <React.Fragment>
            <p>Deleted</p>
            <button
                onClick={()=> {
                    onReset()
                }}
            >
                Reset please
            </button>
            </React.Fragment>                
        )
    }
}

export { UseState }