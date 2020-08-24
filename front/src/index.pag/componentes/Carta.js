import React from 'react'
import '../estilos/estilos.css'

let idUsu = "1140851982"

class Carta extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            titulo: "Carta de presentación",
            descripcion: "Cargando usuario.......",
            imagen : "https://www.cognodata.com/wp-content/uploads/2019/01/perfil-de-cliente-e1549901099803-1.jpg"
        }
    }

    //se ejecuta despues de montar un componente
    componentDidMount(){
        if(idUsu === '1140851982'){
            setTimeout(()=>{
                this.setState({
                    descripcion: "Eric Martinez Acelas",
                    imagen: "https://image.freepik.com/vector-gratis/perfil-hombre-dibujos-animados_18591-58483.jpg"
                })
            }, 5000)
        }else{
            this.setState({
                descripcion: "Usuario es un intruso",
                imagen: "https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51404095-stock-illustration-anonymous-avatar-profile-icon-vector.jpg"
            })
        }
    }

    render() {
        //porpiedades que puede recibir desde el front
        const {fondo} = this.props
        return (
            <div className="card mx-auto" style={{
                backgroundImage: `url(${fondo})`,
                color: "white"
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img className="flow-right Fperfil" src={this.state.imagen} alt="Fperfil" />
                        </div>
                        <div className="col-6">
                            <h1>{this.state.titulo}</h1>
                            <span>Usuario: {this.state.descripcion}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carta