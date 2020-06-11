const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")

const fs = require("fs")

app.use(bodyParser.json({
    limit: '50mb',
    extended: true
}))

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}))

app.use(express.json())

app.get('/', (req, res) => res.json({
    status: "working"
}))

app.get('/get', async (req, res) => {
    if (fs.existsSync("./database.json")) {
        const rawdata = fs.readFileSync('./database.json')
        const data = JSON.parse(rawdata)

        res.json(data)
    } else {
        console.log("File doesn't exist")
        res.json({
            error: "File doesn't exist"
        })
    }
})

app.post("/upload", async (req, res) => {
    let data = JSON.parse(JSON.stringify(req.body))
    res.json(JSON.parse('{"status": "OK"}'))
    fs.writeFile("./database.json", JSON.stringify(data), function (err) {

    })

})

app.listen(port, () => console.log(`Database listening at http://localhost:${port}`))