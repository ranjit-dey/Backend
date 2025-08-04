const exp = require("express");
const app = exp();
require('dotenv').config();
// console.log(process.env);
// const PORT = 3000;

const myGitHubAPI = {
  "login": "ranjit-dey",
  "id": 142099934,
  "node_id": "U_kgDOCHhF3g",
  "avatar_url": "https://avatars.githubusercontent.com/u/142099934?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ranjit-dey",
  "html_url": "https://github.com/ranjit-dey",
  "followers_url": "https://api.github.com/users/ranjit-dey/followers",
  "following_url": "https://api.github.com/users/ranjit-dey/following{/other_user}",
  "gists_url": "https://api.github.com/users/ranjit-dey/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ranjit-dey/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ranjit-dey/subscriptions",
  "organizations_url": "https://api.github.com/users/ranjit-dey/orgs",
  "repos_url": "https://api.github.com/users/ranjit-dey/repos",
  "events_url": "https://api.github.com/users/ranjit-dey/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ranjit-dey/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Ranjit Dey",
  "company": null,
  "blog": "ranjitdey.vercel.app",
  "location": "Barasat, Kolkata",
  "email": null,
  "hireable": null,
  "bio": "Tech Enthusiast",
  "twitter_username": "ranjitdey_",
  "public_repos": 13,
  "public_gists": 0,
  "followers": 3,
  "following": 2,
  "created_at": "2023-08-12T13:36:14Z",
  "updated_at": "2025-07-31T17:25:29Z"
};

app.get('/', (req, res)=>{
    res.send('Backend is running.\n');
})

app.get('/github', (req, res) => {
    res.json(myGitHubAPI);
})

app.listen(process.env.PORT, () => {
    console.log(`Backend is running on port: ${process.env.PORT}\n Click here: http://localhost:${process.env.PORT}`);
})