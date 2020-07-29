/*
const element = document.createElement('h1');
element.innerHTML = 'Hello with JS';
const contenedor = document.getElementById('root');
contenedor.appendChild(element);
*/
import React from 'react'
import ReactDom from 'react-dom'

const name = {
  frist: 'Eric',
  second: 'Martinez',
  age: 28
}
//const element = <h1>Hello with ReactJS and React Dom</h1>
function element2(name){
return <span>Created By: {name.frist} {name.second}, Edad: {name.age}</span>

}

const container = document.getElementById('root')

ReactDom.render(element2(name),container)