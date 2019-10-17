import React from 'react'
import './app.css'

class ButtonLine extends React.Component{
    constructor(){
        super()
        this.state = {
            buttonimg : ['galleryimg/anni.jpg', 'galleryimg/daomei.jpg', 'galleryimg/eyu.jpg', 'galleryimg/lubu.jpg', 'galleryimg/renma.jpg', 'galleryimg/ruiwen.jpg', 'galleryimg/wukong.jpg', 'galleryimg/xiazi.jpg']
        }
    }

    handleOnMouse(e){
        console.log(e)
        
    }
    render(){
        return (<li className = 'btnline'>
            {this.state.buttonimg.map((element) => { 
              return  <img src = {element} className = 'imgsize' key = {element} alt = {element} onMouseOver = {()=>{this.handleOnMouse(element.key)}}></img>
            })}
        </li>)
    }
}

export default ButtonLine