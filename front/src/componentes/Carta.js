import React from 'react'
import '../estilos/estilos.css'

class Carta extends React.Component {
    render() {
        const {titulo, descripcion, fondo, img, colorL, colorR} = this.props
        return (
            <div className="card mx-auto" style={{
                backgroundImage: `url(${fondo})`
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img className="flow-right Fperfil" src={img} alt="Fperfil" />
                        </div>
                        <div className="col-6">
                            <h1>{titulo}</h1>
                            <p>{descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carta