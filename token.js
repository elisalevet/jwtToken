import env from 'dotenv';
import jwt from 'jsonwebtoken';
import express from 'express';
import request from 'request';
//const express = require('express');
const app = express();
//const request = require('request');
const port = 3000;

env.config()

//Getting API key and secret from our .env file 
const {API_KEY, API_SECRET} = process.env

//Using jsonwebtoken to generate JWT token
const generateToken = (key, secret) => jwt.sign({iss: key}, secret, {expiresIn: '1h'})

//Store token in variable to use it to make API call request
const token = generateToken(API_KEY, API_SECRET)

console.log("This is the generated token using JWT credentials :",token)

//Making an API call to Users/me with the generated token

var options = {
    'method': 'GET',
    'url': 'https://api.zoom.us/v2/users/me',
    'headers': {
      'Authorization': `Bearer ${token}`
    },
    'json' : true
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    //Printing the response in the console
    console.log(response.body);
  });
