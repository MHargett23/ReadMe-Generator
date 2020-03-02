const {get} = require("axios")
const api = {
  getUser: async function(username) {
    const URL = "https://api.github.com/users/" + username;
   return await get(URL)
    // .then(function (response) {

    //   callback(userData);
    // })
  }
};

//api.getUser("mhargett23")
module.exports = api;
