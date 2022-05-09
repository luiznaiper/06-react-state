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
 
    console.log(state.value)

    React.useEffect(() => {
      console.log('Starting effect')

        if(state.loading){
            setTimeout(()=> { 
                console.log('Validating setTimeout')

                if(state.value === SECURITY_CODE){
                    setState({
                        ...state,
                        loading: false,
                        error: false,
                        confirmed: true,
                    })
                    // setLoading(false)
                } else{
                    setState({
                        ...state,
                        error: true,
                        loading: false,
                    })
                    // setLoading(false)
                    // setError(true)
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
                            setState({
                                ...state,
                                value: event.target.value,
                            })
                          }}
                    />
                    <button
                        onClick={() =>  {
                            setState({
                                ...state,
                                loading: true,
                            })
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
                    setState({
                        ...state,
                        deleted: true
                    })
                }}
            >
                Yes, delete
            </button>
            <button
                onClick={()=> {
                    setState({
                        ...state,
                        confirmed: false,
                        value: ''
                    })
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
                    setState({
                        ...state,
                        confirmed: false,
                        deleted: false,
                        value: ''
                    })
                }}
            >
                Reset please
            </button>
            </React.Fragment>                
        )
    }
}

export { UseState }