import React from 'react'
import {render} from 'react-dom'
import Media from './src/playlist/components/media'

const app = document.getElementById('app')

//reactDOM.render('que voy a renderizar', 'donde lo hare')
const hola = <h1>Hola papu!</h1>
render( <Media title="¿que es responsive disign?" autor='Juan Manuel' image="./images/covers/bitcoin.jpg" /> ,app)