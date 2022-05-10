import React from "react"

const SECURITY_CODE = 'paradigm'

function UseReducer({ name }){
    const [state, dispatch] = React.useReducer(reducer, initialState)
    
    const onConfirm = () =>  dispatch({ type: actionTypes.confirm })
    
    const onChangeInput = (event) => dispatch({ type: actionTypes.changeInput, payload: event.target.value })
    
    const onError = () => dispatch({ type: actionTypes.error })

    const onCheck = ()=> dispatch({ type: actionTypes.check })
    
    const onDelete =() => dispatch({ type: actionTypes.delete })

    const onReset = () => dispatch({ type: actionTypes.reset })
    

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
                         onChange={onChangeInput}
                    />
                    <button
                        onClick={onCheck}
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
                onClick={onDelete}
            >
                Yes, delete
            </button>
            <button
                onClick={onReset}
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
                onClick={onReset}
            >
                Reset please
            </button>
            </React.Fragment>                
        )
    }
}


const initialState = {
    value: '',
    error: false,
    loading: false,
    confirmed: false,
    deleted: false,
}

const actionTypes ={
    confirm: 'CONFIRM',
    error: 'ERROR',
    changeInput: 'CHANGEINPUT',
    check: 'CHECK',
    delete: 'DELETED'

}

const reducerObject = (state, payload) => ({
   [actionTypes.confirm]:{
    ...state,
    loading: false,
    error: false,
    confirmed: true,
},
   [actionTypes.error]: {
        ...state,
        error: true,
        loading: false
    },
    [actionTypes.changeInput]:{
        ...state,
        value: payload
    },
    [actionTypes.check]: {
        ...state,
        loading: true
    },
    [actionTypes.delete]: {
            ...state,
            deleted: true,
    },
    [actionTypes.reset]:{
        ...state,
        confirmed: false,
        deleted: false,
        value: '',
    },
})

const reducer = (state, action) => {
    if(reducerObject(state)[action.type]){
        return reducerObject(state, action.payload)[action.type]
    } else {
        return state
    }
}

export { UseReducer }


// const reducer  = (state, action) => {
//     if (action.type === 'ERROR'){
//         return {
//             ...state,
//             error: true,
//             loading: false,
//         }
//     }  else if(action.type === 'CHECK'){
//         return {
//             ...state,
//             loading: true,
//         }
//     } else {
//         return {
//             ...state
//         }
//     }
// }

// const reducer  = (state, action) => {
//     switch(action.type){
//         case 'ERROR' :
//             return {
//                 ...state,
//                 error: true,
//                 loading: false
//             }
//         case 'CHECK' :
//              return {
//                  ...state,
//                  loading: true,
//              }
//         default: {
//             return{
//                 ...state,
//             }
//         }                  
//     }
// }
