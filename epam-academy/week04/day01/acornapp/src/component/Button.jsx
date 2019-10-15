import React from 'react'

const layout = {
    width : '10vw',
    height : '4vh'
}

function Button(props){
    return (<button style = {layout} onClick = {props.onClick} disabled = {props.disabled}>
        {props.children}
    </button>)
}


export default Button