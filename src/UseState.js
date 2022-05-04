import React from "react";

function UseState({ name }){
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
      console.log('Starting effect')

        if(loading){
            setTimeout(()=> { 
                console.log('Validating setTimeout')
    
                setLoading(false)
                
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

                <input placeholder="Security Code"/>
                <button
                    onClick={() => setLoading(true)}
                >
                    Submit
                </button>
            </div>
    )
}

export { UseState }