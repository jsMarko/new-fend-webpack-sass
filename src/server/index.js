var path = require("path")
const express = require("express")
const mockAPIResponse = require("./mockAPI.js")
const cors = require("cors") // import cors
const app = express() // your express app instance
app.use(cors()) // Use it as the middleware

app.use(express.static("dist"))

console.log(__dirname)

app.get("/", function (req, res) {
   res.sendFile("dist/index.html")
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
   console.log("Example app listening on port 8081!")
})

app.get("/test", function (req, res) {
   res.send(mockAPIResponse)
})
