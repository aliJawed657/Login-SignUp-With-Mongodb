const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const User = require('./Mongo')

const app = express()

const Port = 3001;
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://jani:login@cluster0.82abepe.mongodb.net/signup?retryWrites=true&w=majority")
    .then(() => {
        console.log("mongodb connected")
    }).catch((err) => {
        console.log(err)
    })

app.post("/", async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password })
        await newUser.save();
        res.status(201).json({ message: "User Signup Successfully" })
    } catch (error) {
        console.log(error)
        res.status(501).json({ message: "internal error" })
    }
})

app.post("/Login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password })
        if (user) {
            res.status(201).json({ message: "login successfully" })
        } else {
            res.status(401).json({ message: "not login" })
        }
    } catch (error) {
        console.log(error)
        res.status(501).json({ message: "server internal error" })
    }
})


app.listen(Port, () => {
    console.log(`Server is Listening ${Port}`)
})