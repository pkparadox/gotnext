import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormControl, Grid, Button, Jumbotron, Row, Col, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import axios from 'axios'
import {setUser} from '../actions/setUser.js'
import {setLoginPage} from '../actions/setLoginPage'
import {setOption} from '../actions/setOption'


class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleLoginUser = this.handleLoginUser.bind(this)
  }


  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      [event.target.id]: event.target.value
    })
  }

  handleLoginUser() {
    let payload = {
      username: this.state.username,
      password: this.state.password
    }
    console.log('this.props:', this.props)
    
    axios.post('/api/user/login', payload)
    .then((data) => {
      console.log('dataaaaaa', data)
      if (data.data.errMsg) {
        console.log('Error signing in:', data.data.errMsg)
      } else if (data.data.token) {
        this.props.setUser(payload.username)
        console.log('Token received from server!\nThis Token will be stored on localStorage: ', data.data.token)
        window.localStorage.setItem('token', data.data.token)
        this.props.setOption('view')
        this.props.setLoginPage('default')
      } else {
        console.log('Error signing in.')
      }
    })
      .catch((err) => {
        console.log('Error logging in user: ', err)
      })
  }

// handleValidation() {
//   // will mess with later. handles client side validation
//   const pwlength = this.state.password.length
//   const userlength = this.state.username.length
//   if (userlength < 3) return 'error'
//   if (pwlength < 3) return 'error'

// }

render() {
  return (
    <div className="formContainer">

      <Form>
        <FormGroup
        // controlId="formBasicText"
        // validationState={this.getValidationState()}
        >
          {/* <ControlLabel>Login:</ControlLabel> */}
          <FormControl className="form"
            type="text"
            id="username"
            value={this.state.username}
            placeholder="Enter Username"
            onChange={this.handleChange}
          />

          <FormControl
            type="password"
            id="password"
            value={this.state.password}
            placeholder="Enter Password"
            onChange={this.handleChange}
          />

          {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
        </FormGroup>
      </Form>

      <Button
        block={true}
        type="button"
        bsStyle="primary"
        onClick={this.handleLoginUser}
      >Login</Button>

    </div>
  )
}
}

const mapStateToProps = state => {
  return {

  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setUser: setUser,
    setLoginPage: setLoginPage,
    setOption: setOption
  },
    dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Login);