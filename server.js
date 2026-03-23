const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let users = [
    {id: 1, name: "Shiven"},
    {id: 2, name: "Shshshs"},
]

app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name:req.body.name
    }
    users.push(newUser)
    res.json(newUser)
})

app.get('/users',(req, res) => {
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    const user = users.find(u =>u.id === req.params.id)
    if(user){
        user.name = req.body.nameres.json(user)
    } else {
        res.status(404).send("user not found")
    }
})

app.put('/users/:id',(req, res) =>{
   const user = users.find(u => u.id == req.params.id)
    if (user) {
        user.id = req.body.id 
        user.name = req.body.name
        res.json(user)
    } else {
        res.status(404).send("User not found")
    }
})

app.delete('/users/:id',(req, res) =>{
    users = users.filter(u => u.id != req.params.id)
    res.send("user deleted")
})

app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})