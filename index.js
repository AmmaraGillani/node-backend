const express = require ('express')
const app = express()

require('dotenv').config()
const port = 4000;

const gitHubData = {
  "login": "AmmaraGillani",
  "id": 126082977,
  "node_id": "U_kgDOB4PfoQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/126082977?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AmmaraGillani",
  "html_url": "https://github.com/AmmaraGillani",
  "followers_url": "https://api.github.com/users/AmmaraGillani/followers",
  "following_url": "https://api.github.com/users/AmmaraGillani/following{/other_user}",
  "gists_url": "https://api.github.com/users/AmmaraGillani/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AmmaraGillani/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AmmaraGillani/subscriptions",
  "organizations_url": "https://api.github.com/users/AmmaraGillani/orgs",
  "repos_url": "https://api.github.com/users/AmmaraGillani/repos",
  "events_url": "https://api.github.com/users/AmmaraGillani/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AmmaraGillani/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 17,
  "public_gists": 0,
  "followers": 0,
  "following": 3,
  "created_at": "2023-02-22T13:35:57Z",
  "updated_at": "2024-08-10T14:57:37Z"
}

app.get('/github',(req,res) =>{
    res.json(gitHubData)
})

app.get('/',(req,res) => {
    res.send('helloAmmara')
})

app.get('/login', (req, res) => {
    res.send('<h1>hello from login</h1>')
})

app.get('/sign-up', (req, res) => {
    res.send('<h2>Hello from SignUP</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Hello i'm running on port ${process.env.PORT}`)
})
