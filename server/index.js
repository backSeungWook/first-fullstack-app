const express = require("express")
const cors = require('cors')
const app = express()
const {Article} = require('./api')
const PORT = 3000


// Access-Control-Allow-Origin
app.use(cors())

// req.body - post에서 들어온 페이로드를 받을수 있다.
// 즉 body-parser 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req,res) =>{
  res.send("Success")
})


app.get('/read', Article.articleRead)
app.get('/read/:id', Article.articleFindOne)
app.post('/create', Article.articleCreate)
app.patch('/update', Article.articleUpdate)
app.delete('/delete/:id', Article.articleDelete)


app.listen(PORT,"localhost", () =>{
  console.log(`App listening at http://localhost:${PORT}`)
})