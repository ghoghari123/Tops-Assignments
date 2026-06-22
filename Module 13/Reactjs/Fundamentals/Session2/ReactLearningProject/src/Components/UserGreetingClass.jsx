import React, { Component } from 'react'

class UserGreetingClass extends Component {
  render() {
    return (
      <div>
        <h2 style={{fontSize:"1rem"}}>{this.props.username} </h2>
      </div>
    )
  }
}

export default UserGreetingClass
