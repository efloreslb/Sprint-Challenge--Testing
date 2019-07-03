const express = require('express');

const Videogames = require('./serverModel');

const server = express();
server.use(express.json());

// server.get('/', (req, res) => {

// })

server.get('/games', async (req, res) => {
   const videogames = await Videogames.get();
   res.status(200).json(videogames);
})

server.post('/games', (req, res) => {
   
})

module.exports = server;