import React from 'react'
import './app.css'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            imgnow: ''
        }
    }

    changefn = (img) => {
        this.setState({imgnow: img})
        console.log(this.state.imgnow)
    }

    render(){
        return (<><ButtonLine fn = {this.changefn}/>
                <Imgspace value = {this.state.imgnow} /></>)
    }
}

class ButtonLine extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            buttonimg : ['galleryimg/anni.jpg', 'galleryimg/daomei.jpg', 'galleryimg/eyu.jpg', 'galleryimg/lubu.jpg', 'galleryimg/renma.jpg', 'galleryimg/ruiwen.jpg', 'galleryimg/wukong.jpg', 'galleryimg/xiazi.jpg']
        }
    }

    handleOnMouse(e){
        console.log(e)
        
    }
    render(){
        return (<li className = 'btnline' key ='aaa'>
            {this.state.buttonimg.map((element) => { 
              return  <img src = {element} className = 'imgsize' key = {element} alt = {element} onClick = { (event) => this.props.fn(event.target.alt)}></img>
            })}
        </li>)
    }
}

class Imgspace extends React.Component{
    render(){
        // return (<p>{this.props.value}</p>)
        return (<div className = 'bigimgsize'><img className = 'bigimgsize' src = {this.props.value} key = {this.props.value} alt = {1}/></div>)
        
    }
}

export default App