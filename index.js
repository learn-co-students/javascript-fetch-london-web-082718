const app = "I don't do much.";
const token = '8c65a04a248ca9fdb82b12638b7bb1b4e26b7305'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));