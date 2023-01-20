require('../set')
__path = process.cwd()



// Module
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var { performance } = require('perf_hooks');

// Lib
var { runtime, fetchJson } = require('../lib/myfunc')

// Apikey
var listkey = ["9286c1a775","9267ic6a0f1","927j59de9c","921n567ea6","921h5a4282","925n2c494","928b0323c9","927b0k3hp7o2","925b04ib0j","023l1qhbpk","92b1a0h7ts","92a70b789c","9291a7bk0p1","92a7o8pe9c","92y1a7l0a6","9221a7i9h2","921a7k3n94","92a0kk2bc9","921a7l9pho2","92a2n1kb0j","92b0a75k6f","92u1a7pr8s"];
var listkeyprem = ["candra"];
var listkeyvip = ["candravip"];


// Check Apikey
router.get('/checkapikey', async (req, res, next) => {
	var apikey = req.query.apikey

	if(!apikey) return res.json({message: 'apikey invalid' })
	if(listkey.includes(apikey))
	
	var keys = apikey
	if (keys) {
	json = JSON.stringify({
		status: true,
		author: 'smkxt7',
		result: {
         apikey: keys
		},
	})
} else {
	json = JSON.stringify({
		status: false,
		apikey: 'Not Found'
	})
}
res.send(JSON.parse(json))
})

// Main Api
// Statistic
router.get('/main/statistic', async (req, res, next) => {
var date = new Date
var hour = date.getHours()
var minute = date.getMinutes()
var second = date.getSeconds()
var neww = performance.now()
var old = performance.now()
var ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
var cpu = require('os').cpus()
var json = await (await fetch('https://api.ipify.org/?format=json')).json()
var port = process.env.PORT || 8080 || 5000 || 3000 
    status = {
        status: true,
        memory: ram,
        cpu: cpu,
        port: port,
        ip: json.ip,
        time: `${hour} : ${minute} : ${second}`,        
        speed: `${old - neww}ms`,
        info:{       
            author: 'smkxt7'
        }
    }
    res.json(status)
})

// Runtime
router.get('/main/runtime', async (req, res, next) => {
	runtim = {
		status: true,
		runtime: muptime(process.uptime()),
		info:{       
            author: 'smkxt7'            
        }
    }
    res.json(runtim)
})

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/dash', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/profile', (req, res) => {
    res.sendFile(__path + '/views/profile.html')
})

router.get('/pricing', (req, res) => {
    res.sendFile(__path + '/views/pricing.html')
})

router.get('/settings', (req, res) => {
    res.sendFile(__path + '/views/settings.html')
})

router.get('/reset-password', (req, res) => {
    res.sendFile(__path + '/views/reset-password.html')
})

router.get('/reset-password-verify', (req, res) => {
    res.sendFile(__path + '/views/reset-password-verify.html')
})

router.get('/create-new-password', (req, res) => {
    res.sendFile(__path + '/views/create-new-password.html')
})

router.get('/sign-in', (req, res) => {
    res.sendFile(__path + '/views/sign-in.html')
})

router.get('/sign-up', (req, res) => {
    res.sendFile(__path + '/views/sign-up.html')
})

router.get('/example-code/raw/case-wa-bot-media', (req, res) => {
	res.sendFile(__path + '/views/example-code/raw/case-wa-bot-media.txt')
})

router.get('/example-code/raw/case-wa-bot-result', (req, res) => {
	res.sendFile(__path + '/views/example-code/raw/case-wa-bot-result.txt')
})

router.get('/example-code/raw/router-media', (req, res) => {
	res.sendFile(__path + '/views/example-code/raw/router-media.txt')
})

router.get('/example-code/raw/router-result', (req, res) => {
	res.sendFile(__path + '/views/example-code/raw/router-result.txt')
})


module.exports = router

// Func Runtime
function muptime(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(hours) + ' : ' + pad(minutes) + ' : ' + pad(seconds)
}
