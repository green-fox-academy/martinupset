import React from 'react'
import './app.css'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            buttonimg : ['galleryimg/anni.jpg', 'galleryimg/daomei.jpg', 'galleryimg/eyu.jpg', 'galleryimg/lubu.jpg', 'galleryimg/renma.jpg', 'galleryimg/ruiwen.jpg', 'galleryimg/wukong.jpg', 'galleryimg/xiazi.jpg'],
            imgnow: 'galleryimg/anni.jpg'
        }
    }

    changefn = (img) => {
        this.setState({imgnow: img})
        console.log(this.state.imgnow)
    }

    arrowchangefn = () =>{
        let now_index = this.state.buttonimg.indexOf(this.state.imgnow)
        if (now_index < this.state.buttonimg.length-1 )
        { now_index ++ }
        else
        {now_index = 0}
        this.setState({imgnow : this.state.buttonimg[now_index]})
        console.log(this.state.imgnow)
    }

    render(){
        return (<><ButtonLine fn = {this.changefn}/>
                <Imgspace value = {this.state.imgnow} arrowfn = {this.arrowchangefn}/></>)
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
        return (<div className = 'imgcontainer'>
            <img src = 'galleryimg/arrow2.png' key = 'arrow2' alt = 'arrow2' className = 'arrowimg' onClick = {this.props.arrowfn}/>
            <img className = 'bigimgsize' src = {this.props.value} key = {this.props.value} alt = {1}/>
            <img src = 'galleryimg/arrow.png' key = 'arrow1' alt = 'arrow1' className = 'arrowimg' onClick = {this.props.arrowfn}/>
            </div>)
        
    }
}

export default App