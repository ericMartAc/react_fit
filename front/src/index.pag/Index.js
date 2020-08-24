import React from 'react'
import Welcome from './componentes/Welcome'
import Carta from './componentes/Carta.js'
import fondo from './img/fondo.jpg'

class Index extends React.Component {
    render() {
        return (
            <div className="container">
                <Welcome
                    userName="Desarrollador"
                />
                <Carta
                    //le pasamos atributos desde el front
                    //el componente va cargar props propios y estos
                    fondo={fondo}
                />
            </div>
        )
    }
}

export default Index