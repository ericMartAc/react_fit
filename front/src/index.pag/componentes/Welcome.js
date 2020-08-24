import React from 'react'

function Welcome(props) {
    return (
        <div className="container">
            <h1>Hola {props.userName}</h1>
            <span>Bienvenido al curso React.js</span>
        </div>
    )
}

export default Welcome