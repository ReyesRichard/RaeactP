import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component{
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
            <div className="Media">
                <div>
                    <img 
                        src={this.props.image} 
                        alt=""
                        width={260}
                        heigth={160}/>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.autor}</p>
                </div>
            </div>
        )
    }
}

// Media.propTypes = {
//     image: PropType.string,
//     title: PropType.string,  
//     autor: PropType.string,
// }

export default Media