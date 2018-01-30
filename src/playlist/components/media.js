import React, { Component } from 'react'
import PropTypes from "prop-types"
import './media.css'

class Media extends Component{
    state = {
        autor: 'Ricardo P'
    }
    // constructor(props){
    //     //Cacha las propiedades
    //     super(props)
    //     //Para mutar propiedades
    //     this.state = {
    //         autor: props.autor,
    //     }
    //     //Pasa la funcion de un evento en el render del componente
    //     // this.handleClick = this.handleClick.bind(this)
    // }
    // handleClick(event){
    //     // console.log(event)
    //     console.log(this.props.title)
    // }

    //EcmaScript7 Para pasar todos las funciones que se generarn sin neccesidad del constructor
    handleClick = (event) => {
        // console.log(this.props.title)
        this.setState({
            autor: 'Pepe Pecas',
            // autor: this.props.autor,

        })
    }
    render(){
        const styles = {
            container:{
                fontSize: '14px',
                background: 'gray',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'

            }
        }
        return (
            <div className="Media" onClick={this.handleClick}>
                <div>
                    <img 
                        src={this.props.cover} 
                        alt=""
                        width={260}
                        heigth={160}/>
                    <h3>{this.props.title}</h3>
                    {/* <p>{this.state.author}</p> */}
                     <p>{this.props.author}</p> 
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,  
    author: PropTypes.string,
}

export default Media