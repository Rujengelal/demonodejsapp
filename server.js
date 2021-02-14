const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/pushNodesData', (req, res) => {
  res.send('Data recieved')
  console.log("data recieved")
})
app.get('/formatData', (req, res) => {
  console.log(req.query.data)
  let data=JSON.parse(req.query.data)
  res.send(`${data['co2']}:${data['humidity']}:${data['light']}:${data['moisture']}:${data['temperature']}`)
 
})
app.listen(process.env.PORT||port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})