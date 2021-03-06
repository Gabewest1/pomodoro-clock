const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.static(path.resolve(__dirname)))
app.get("/bundle.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "bundle.js"))
})
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(PORT, () => console.log("Running of port" + PORT))
