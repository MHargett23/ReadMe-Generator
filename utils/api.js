const axios = require("axios")
const api = {
  getUser(username, callback) {
    const URL = "https://api.github.com/users/" + username;
    axios.get(URL).then(function (response) {
      const userInfo = {
        avatar: response.data.avatar_URL,
        realName: response.data.name,
        email: response.data.email
      }
      callback(userData);
    })
  }
};

api.getUser("mhargett23")
module.exports = api;
