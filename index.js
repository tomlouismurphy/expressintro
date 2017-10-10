const express = require('express') //this pulls in our express framework
const app = express(); //app is an object with a bunch of methods to build a server

app.get('/', (request, response) => { //those variables can be anything we want, but the first is always a request and the second always a response
	response.send('i am information sent by server to the client');
})

app.get('/tacos',(req, res) => {
	res.json({
		"taco": 52,
		"type": "carne asada"
	})
})

app.get('/test', (req, res) => {
	res.json({
		"forest": true,
		"trees": 40,
		"leaf": "oak"
	})
	// console.log(req);
	// console.log(res);
})

app.get('/chorizo', (req, res) => {
	res.json({
		"result": "thirsty"
	})
})

app.listen(3000, () => {
	console.log('i am listening on port 3000')
});