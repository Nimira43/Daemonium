const express = require('express')
const port = 5000

const app = express()

app.get('/', (req, res) => {
  res.send('Daemonium')
})

app.listen(port, () => console.log(`Server listening on Port ${port}`))