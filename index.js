import React from 'react'
import {render} from 'react-dom'
import Playlist from './src/playlist/components/playlist'
import data from './src/api.json'
const app = document.getElementById('app')

//reactDOM.render('que voy a renderizar', 'donde lo hare')
const hola = <h1>Hola papu!</h1>
render(<Playlist data={data} /> , app)