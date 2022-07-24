let express = require("express")
const app = express()

app.set("view engine", "ejs")


app.get("/", (req, res, next) => {
  console.log("Here")
  res.sendStatus(200)
})
const apis_router = require("./routes/apis")

app.use('/apis', apis_router)

app.listen(3000)