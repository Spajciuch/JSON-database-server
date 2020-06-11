const fetch = require("node-fetch")

fetch('http://192.168.0.57:3000/upload', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user: {
            name: "No debil",
            email: "john@example.com"
        }
    })
}).then(res => res.json().then(result => {
    console.log(result)
}))