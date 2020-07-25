'use stricts'
//asignaciones del programa
import React from "react"
import ReactDOM from "react-dom"

//contenedor de la aplicación (donde)
const Container = document.getElementById('root')
//modelo de usuario
const User = {
  fristName: 'Eric',
  lastName: 'Martinez',
  avatar: 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.0-9/s960x960/98186124_267423587958091_5118670086965559296_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=3Ztyll4Qp1cAX-JIKRJ&_nc_ht=scontent.fbaq1-1.fna&_nc_tp=7&oh=3bb98bafbf66e6b051ebcf45cccdc734&oe=5F3A18EA'
}
//estructura Html a renderizar
const Element =
  <div>
    <h1>{getUser(User)}</h1>
    <img src={getAvatar(User)}/>
  </div>

/*codicionales de renderizado
function getGreeting(User) {
  if (User) {
    return <div>
      <h1>Nombre: {getUser(User)} </h1>
      <img src={getAvatar(User)}/>
    </div>
  } else {
    return <div>User no found</div>
  }
}
*/

//funciones get
function getUser(User) {
  return `${User.fristName}` + ' ' + `${User.lastName}`
}
function getAvatar(User) {
  return `${User.avatar}`
}



//renderizado
ReactDOM.render(Element, Container)