/*
const element = document.createElement('h1');
element.innerHTML = 'Hello with JS';
const contenedor = document.getElementById('root');
contenedor.appendChild(element);
*/
import React from 'react'
import ReactDom from 'react-dom'

const element = <h1>Hello with ReactJS and React Dom</h1>
const container = document.getElementById('root')

ReactDom.render(element,container)