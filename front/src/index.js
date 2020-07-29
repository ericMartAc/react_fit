import React from 'react'
import ReactDom from 'react-dom'

const user = ['Eric', 'Martinez', 1992, 'Barranquilla']

function getGetting(user) {
  const fecha = new Date();
  var año = fecha.getUTCFullYear();
return <span>{user[0]} {user[1]} tiene {año - user[2]} años, nacido en {user[3]} </span>
}

const container = document.getElementById('root')

ReactDom.render(getGetting(user), container)