import React, {Component } from 'react'
import Media from './media'

class Playlist extends Component{
    render(){
        const playlist = this.props.data.categories[0].playlist
        console.log(this.props.data)
        return (
            <div>
                {
                    playlist.map((item)=>{
                        /* return <Media title={item.title } autor={item.author} key={item.id} /> */
                        return <Media {...item } key={item.id} />/*{...item } Regresa una propiedad por cada elemento item, regresa todas las propiedaddes del elemento  */
                    })
                }
            </div>
        )
    }
}

export default Playlist