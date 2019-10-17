import React from 'react'

class Component2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: component01,
            time: new Date()
        }
    }

    componentDidMount(){
        let montedTime = new Date()
        this.setState({
            Time: montedTime
        })
    }

    componentWillUnmount(){
        let unmountTime = new Date()
        this.props.handleFunction(this.state.name,
            Math.round((unmountTime - this.state.time)/1000)
            )
    }

    render(){
        return <p>this is the content of component02</p>
    }
}

export default Component2