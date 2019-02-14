require ('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const control = require('./controllers')
const massive = require('massive')
const bcrypt = require('bcrypt-nodejs');
const mid = require('./middleware')
const axios = require('axios')

let {
  SESSION_SECRET,
  SERVER_PORT,
  CONNECTION_STRING,
} = process.env

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('DB connected')
})


app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))


app.use(express.json())
app.use(mid.bypassAuthInDevelopment)

app.use(express.static('public'))

app.get('/home', function(req, res){
  res.sendFile(__dirname + '/App.js')
})


//controllers
app.post('/api/reg', (req, res) => control.register(req, res, bcrypt)),
app.post('/api/login', (req, res) => control.login(req, res, bcrypt))

app.get('/api/users', control.getUsers)

app.get('/users', isAdmin, function(req, res){
  console.log(req.query)
  const db = req.app.get('db')

  if(req.query.username !== ''){
    db.get_query_user([req.query.username]).then(user => {return res.send(user) })
    console.log('User Found')
  }else{
    db.getUsers().then(users => {return res.status(200).send(users)})
    console.log('All users')
  }
})

function isAdmin(res, req, next){
  let admin = 'ruben1'
  if(admin === 'ruben1'){
    console.log('Authorized')
    next()
  }else{
    console.error('Not Authorized')
    res.sendStatus(401)
  }
}



app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`)
})



//set up an endpoint that can receive a query