const route = require('express').Router()
const User = require('../models/User')

route.post('/register', async (req, res) => {
  
  //res.send('register')
  //console.log('register')
  
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  
  try{
    const userSave = await user.save()
    res.send(userSave)  
  }
  catch(err){
    res.status(400).send(err)  
  }
  
})

route.get('/login', (req, res) => {
  res.send('auth login route')
})

module.exports = route
