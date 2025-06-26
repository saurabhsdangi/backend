require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

const githubData= {
  "login": "saurabhsdangi",
  "id": 139103549,
  "node_id": "U_kgDOCEqNPQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/139103549?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/saurabhsdangi",
  "html_url": "https://github.com/saurabhsdangi",
  "followers_url": "https://api.github.com/users/saurabhsdangi/followers",
  "following_url": "https://api.github.com/users/saurabhsdangi/following{/other_user}",
  "gists_url": "https://api.github.com/users/saurabhsdangi/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/saurabhsdangi/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/saurabhsdangi/subscriptions",
  "organizations_url": "https://api.github.com/users/saurabhsdangi/orgs",
  "repos_url": "https://api.github.com/users/saurabhsdangi/repos",
  "events_url": "https://api.github.com/users/saurabhsdangi/events{/privacy}",
  "received_events_url": "https://api.github.com/users/saurabhsdangi/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-07-10T06:08:18Z",
  "updated_at": "2025-05-27T19:01:42Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('saurabh.com')
})

app.get('/login', (req, res) =>{
    res.send('<h1>Login at Chai aur Code </h1>')
})

app.get('/youtube', (req, res) =>{
    res.send("<h2>Chai aur Code</h2>")
})

app.get('/github', (req, res) =>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})