import React from 'react'
import ReactDom from 'react-dom'

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

const container = document.getElementById('root')

ReactDom.render(getGetting(user), container)