// const app = "I don't do much."
const fetch = require("node-fetch");

// pre - token file / authorisation - returned a 401 unauthorised error
// fetch('https://api.github.com/user/repos').
//   then(res => res.json()).
//   then(json => console.log(json))


const token = '3416ee40d7051b74cd9821b1f6cc7f5040805c77'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));