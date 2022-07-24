const express = require("express")
const router = express.Router()

let apispath = '../apis/'
let apis = ["/codm_loadout_generator"]
router.get("/", (req, res) => {
  res.send(`${apis.join("\n")}`)
})

router.get("/codm_loadout_generator", (req, res) => {
  let generate = require(apispath+"codmgenerator")
  res.send(JSON.stringify(generate()))
})



module.exports = router