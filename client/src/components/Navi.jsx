import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setOption } from '../actions/setOption'
import { setLoginPage } from '../actions/setLoginPage'
import { setUser } from '../actions/setUser.js'
import { setUserGames } from '../actions/setUserGames'
import axios from 'axios'
import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';


class Navi extends Component {

  render() {
    return (

      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            .got(next)
          </Navbar.Brand>
        </Navbar.Header>

        {/* === SEARCH BUTTON === */}
        <Nav>
          <NavItem>
            <a href=""
              onClick={(e) => {
                e.preventDefault()
                this.props.setOption('search')
                this.props.setLoginPage('default')
              }}
              className="navigation"
            >
              Search
        </a>
          </NavItem>
          {/* === CREATE BUTTON === */}

          <NavItem>
            <a href=""
              onClick={(e) => {
                e.preventDefault()
                this.props.setOption('create')
                this.props.setLoginPage('default')
              }}
              className="navigation"
            >
              Create
        </a>
          </NavItem>
          {/* === VIEW BUTTON === */}
          <NavItem>
          <a href=""
            onClick={(e) => {
              e.preventDefault()
              this.props.setOption('view')
              this.props.setLoginPage('default')
            }}
            className="navigation"
          >
            View
        </a>
        </NavItem>
          {/* === SIGNUP BUTTON === */}
          <NavItem>
            <a href=""
              onClick={(e) => {
                e.preventDefault()
                this.props.setLoginPage('signup')
              }}
              className="navigation"
            >
              Sign Up
        </a>
          </NavItem>
          {/* === LOGIN BUTTON === */}
          <NavItem>
          <a href=""
            onClick={
              (e) => {
                e.preventDefault()
                this.props.setLoginPage('login')
              }}
            className="navigation"
          >
            Login
        </a>
          </NavItem>
            {/* === LOG OUT BUTTON === */}
            <NavItem>
            <a href=""
              onClick={(e) => {
                e.preventDefault()

                axios.get('/api/user/logout')
                  .then((data) => {
                    window.localStorage.removeItem('token')
                    this.props.setUser(null)
                    this.props.setUserGames(null)
                    this.props.setLoginPage('default')
                    this.props.setOption('search')
                    console.log('Data:', data.data.message)
                  })
                  .catch((err) => {
                    console.log('Error logging out', err)
                  })


              }
              }
              className="navigation"
            >
              Log Out
        </a>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setOption: setOption,
    setLoginPage: setLoginPage,
    setUser: setUser,
    setUserGames: setUserGames
  },
    dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Navi);