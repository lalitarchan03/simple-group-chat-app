const express = require('express');
const fs = require('fs')

const router = express.Router();



router.get("", (req, res, next) => {
    fs.readFile("messages.txt", {encoding: "utf-8"}, (err, data) => {

        if (err) {
            console.log(err);
            data = "No Previous Chat Exits!";
        }
        res.send(`${data} <form action="/chat" method="POST" onsubmit = "document.getElementById('username').value = localStorage.getItem('username')">
        <input type="text" name="message" placeholder="Write your message"> 
        <input type="hidden" name="username" id="username">
        <button type="submit">Send</button> 
        </form> `);
    })
});

router.post("", (req, res, next) => {
    // console.log(req.body.message);
    // console.log(req.body.username);
    fs.writeFile("messages.txt", `${req.body.username}: ${req.body.message} `, {flag:'a'}, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/chat');
        }
    });

});


module.exports = router;