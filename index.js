const express = require('express')
const User = require('./models/user')

let app = express()
app.use(express.json(), express.static('public'))
app.post('/submit', async (req, res) => {
  let user = await User.build(req.body)
  try {
    await user.validate()
    res.end()
  }
  catch (error) {
    let errors = error.errors.reduce((errors, e) => {
      errors[e.path] = e.message
      return errors
    }, {})
    res.status(400).json(errors)
  }
})
app.listen(8000)