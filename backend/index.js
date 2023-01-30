const connectToMongo = require("./db");
var cors = require('cors')


const express = require('express')
connectToMongo();

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())

// avaliable routes
app.use('/api/auth' , require('./Routes/auth'))
app.use('/api/notes' , require('./Routes/notes'))

app.listen(port, () => {
  console.log(`iNoteBook app listening on port ${port}`)
})
