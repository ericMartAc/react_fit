import React from 'react'
import ReactDom from 'react-dom'
import Card from './componentes/Carta.js'
import 'bootstrap/dist/css/bootstrap.css'
import fondo from './img/fondo.jpg'


const container = document.getElementById('root')

ReactDom.render(<Card
//le pasamos atributos desde el front
//el componente va cargar props propios y estos
  fondo={fondo}
/>, container)


/*

const user = ['Eric', 'Martinez', 1992, 'Barranquilla']
//const user = null;

function getGetting(user) {
  if (user) {
    const fecha = new Date();
    var año = fecha.getUTCFullYear();
    return <span>{user[0]} {user[1]} tiene {año - user[2]} años, nacido en {user[3]} </span>
  }
  return <span>No existen datos</span>
}

*/