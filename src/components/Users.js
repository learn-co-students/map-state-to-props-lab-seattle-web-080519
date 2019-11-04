import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  mapProps = () => {
    return this.props.users.map( user => {
      return (
        <li key={user.username}>
            Username: {user.username}<br/>
            {/* Hometown:{user.hometown}<br/> */}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        User Count: {this.props.userCount} <br />
        User List: 
        <ul>
        {this.mapProps()}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  const list = state.users.map( user => {
    return {username: user.username, hometown: user.hometown, key: state.users.indexOf(user)}
  })
  return { 
    users : list,
    userCount: state.users.length
  }
} 
// connect this component to Redux
export default connect(mapStateToProps)(Users);

