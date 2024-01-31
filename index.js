const express = require('express');
const bodyparser = require('body-parser');
const fs = require('fs');

const loginRoutes = require('./routes/login')
const chatRoutes = require('./routes/chat')

const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.use('/login',loginRoutes);

app.use('/chat', chatRoutes);

// app.get("/", (req, res, next) => {
//     fs.readFile("messages.txt", {encoding: "utf-8"}, (err, data) => {

//         if (err) {
//             console.log(err);
//             data = "No Previous Chat Exits!";
//         }
//         res.send(`${data} <form action="/" method="POST" onsubmit = "document.getElementById('username').value = localStorage.getItem('username')">
//         <input type="text" name="message" placeholder="Write your message"> 
//         <input type="hidden" name="username" id="username">
//         <button type="submit">Send</button> 
//         </form> `);
//     })
// });

// app.post("/", (req, res, next) => {
//     // console.log(req.body.message);
//     // console.log(req.body.username);
//     fs.writeFile("messages.txt", `${req.body.username}: ${req.body.message} `, {flag:'a'}, (err) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             res.redirect('/');
//         }
//     });

// });

// app.get("/login", (req, res, next) => {
//     res.send('<form action="/" method="GET" onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" > <input type="text" id="username" name="title" placeholder="username"> <button type="submit">Login</button> </form> ');

// });

app.use((req, res, next) => {
    console.log(req.url)
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);