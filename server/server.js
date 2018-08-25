const express = require('express');
const cors = require('cors');

const server = express();

const originUrl = process.env.NODE_ENV === 'production'
  ? 'https://movieramble.herokuapp.com'
  : 'http://localhost:3000';

const corsOptions = {
  origin: originUrl,
  credentials: true,
  methods: ['GET', 'PUT', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

server.use(cors(corsOptions));
server.use(express.json());

module.exports = server;
