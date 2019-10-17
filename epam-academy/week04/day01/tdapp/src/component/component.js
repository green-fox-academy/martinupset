import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todo: [
              {
                text: 'Feed the monkey',
                prio: 2
              },
              {
                text: 'Buy milk',
                prio: 1
              }
            ],
            doneTodo: [
              {
                text: 'Sleep 8 hours',
                prio: 2
              },
              {
                text: 'Mentoring others',
                prio: 1
              }
            ],
          }
          this.doneTodo = this.doneTodo.bind(this)
          this.deleteTodo = this.deleteTodo.bind(this)
    }

    deleteTodo(item, event){
        let indexOfItem = this.state.doneTodo.indexOf(item)
        let doneTodos = this
        // return (this.state.doneTodo)
    }

    doneTodo(index){    
        this.state.doneTodo.push(this.state.todo[index])
        this.state.todo.splice(index,1)
        // return(this.state.todo[index])
    }

    render(){
        const td = this.state.todo
        const dtd = this.state.doneTodo
        return(
            <div>
                <li>TODOS:</li>
                {td.map((element) => {return <li key = {element.text}>{element.text}
                <button onClick = {this.doneTodo}>done</button>
                </li>})}
                    <li>Done:</li>
                <li>
                {dtd.map((element) => {return <li key = {element.text}>{element.text}
                <button onClick = {this.deleteTodo}>delete</button>
                </li>})}
                </li>
            </div>
        )
    }

}

export default App;