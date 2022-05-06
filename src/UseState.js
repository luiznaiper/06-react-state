import React from "react";

const SECURITY_CODE = 'paradigm'

function UseState({ name }){
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    console.log(value)

    React.useEffect(() => {
      console.log('Starting effect')

        if(loading){
            setTimeout(()=> { 
                console.log('Validating setTimeout')

                if(value === SECURITY_CODE){
                    setLoading(false)
                } else{
                    setLoading(false)
                    setError(true)
                }
                
                
                console.log('Endind setTimeout')
            }, 3000)
        }

      console.log('Ending effect')
    
    },[loading])
    

    return (
        <div>
                <h2>Delete  { name }</h2>
                <p>Please, wirte your security code</p>

                { error && (
                    <p>Error: your code is wrong</p>
                ) }
                { loading &&(
                    <p>Loading...</p>
                )}

                <input
                     placeholder="Security Code"
                     value={value}
                     onChange={(event) => {
                        setValue(event.target.value)                
                     }}
                />
                <button
                    onClick={() => setLoading(true)}
                >
                    Submit
                </button>
            </div>
    )
}

export { UseState }