__path = process.cwd()

/*
* Created by: Danzz Coding | https://danzzcodingweb.vercel.app
*/

// Module
var express = require('express');
var router = express.Router();


// 
router.get('/tictactoe', (req, res) => {
    res.sendFile(__path + '/views/game/tictactoe.html')
})

router.get('/snake', (req, res) => {
    res.sendFile(__path + '/views/game/snake.html')
})

router.get('/2048', (req, res) => {
    res.sendFile(__path + '/views/game/2048.html')
})


module.exports = router
