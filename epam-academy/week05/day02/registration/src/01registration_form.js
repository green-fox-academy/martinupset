import React from 'react'

const initData = {
  FirstName : '',
  LastName : '',
  Email : '',
  registration: []
}

class RegistrationForm extends React.Component{
  state = initData

  handleChange = (event) => {
    let {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    let {FirstName, LastName, Email} = this.state
    let newRegistration = [...this.state.registration]
    if(
      FirstName.trim() !== '' &&
      LastName.trim() !== '' &&
      Email.trim() !== ''
    ){
      newRegistration.push({
        firstName: FirstName,
        lastName: LastName,
        email: Email
      })
      this.setState({
        FirstName: '',
        LastName: '',
        Email: '',
        registration: newRegistration
      })
    }
    else{
      alert('wrong input')
    }
  }

  render(){
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input 
          type = 'text'
          placeholder='First name'
          name = 'FirstName'
          value = {this.state.FirstName}
          onChange={this.handleChange}/>

          <input
          type = 'text'
          placeholder = 'Last name'
          name = 'LastName'
          value = {this.state.LastName}
          onChange = {this.handleChange}/>

          <input
          type = 'text'
          placeholder = 'Email address'
          name = 'Email'
          value = {this.state.Email}
          onChange={this.handleChange}/>

          <button>Submit</button>
        </form>
        <ul>
          {this.state.registration.map((user, index) => (
            <li key = {index}>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
            </li>
    ))}
        </ul>
      </div>
    )
  }
}

export default RegistrationForm
