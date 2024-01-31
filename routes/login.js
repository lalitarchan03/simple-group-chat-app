const express = require('express');
const fs = require('fs')

const router = express.Router();



// router.get('/', (req, res, next) => {
//     fs.readFile("messages.txt", {encoding: "utf-8"}, (err, data) => {

//         if (err) {
//             console.log(err);
//             data = "No Previous Chat Exits!";
//         }
//         else {
//             res.send(`${data} <form action="/" method="POST" onsubmit = "document.geyElementById('username') = localStorage.getItem('username')"> <input type="text" name="message" placeholder="Write your message"> 
//         <input type="hidden" name="username" id="username">
//         <button type="submit">Send</button> </form> `);
//         }
//     })
// });

// router.post('/', (req, res, next) => {
//     // res.send('<form action="/" method="POST"> <input type="text" name="message" placeholder="Write your message"> <button type="submit">Send</button> </form> ');
//     console.log(req.body.message);
//     console.log(req.body.username);
//     fs.writeFile("messages.txt", `${req.body.username}: ${req.body.message} `, {flag:'a'}, (err) => {
//         if (err) {
//             console.log(err);
//         } 
//         else {
//             res.redirect('/');
//         }
//     });

// });

router.get('', (req, res, next) => {
    res.send('<form action="/chat" method="GET" onsubmit="localStorage.setItem(`username`, document.getElementById(`name`).value)" > <input type="text" id="name" name="title" placeholder="username"> <button type="submit">Login</button> </form> ');

});


module.exports = router;