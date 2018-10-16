const app = "I don't do much.";

const token = 'fc948f624ea13b1ffad74a6eea47e0a7e7516fc9'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));