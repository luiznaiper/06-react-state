import React from "react";

function UseState({ name }){
    const [error, setError] = React.useState(false)

    return (
        <div>
                <h2>Delete  { name }</h2>
                <p>Please, wirte your security code</p>

                { error && (
                    <p>Error: your code is wrong</p>
                ) }

                <input placeholder="Security Code"/>
                <button
                    onClick={() => setError(!error)}
                >
                    Submit
                </button>
            </div>
    )
}

export { UseState }