const {User} = require('../../db/models');
const axios = require('axios');

UserController = {
  
  Login: (req, res) => {

  },

  Logout: (req, res) => {
    
  },

  Signup: (req, res) => {
    User.create({
    email: 'helloworld@helloworld.com'
    })
    .then( (res) => {
      console.log('res', res);
    })
    .catch( (err) => {
      console.log('err', err);
    })
  }
}

module.exports = UserController;