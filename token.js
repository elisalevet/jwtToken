import env from 'dotenv';
import jwt from 'jsonwebtoken';
env.config()

//Getting API key and secret from our .env file 
const {API_KEY, API_SECRET} = process.env

//Using jsonwebtoken to generate JWT token
const generateToken = (key, secret) => jwt.sign({iss: key}, secret, {expiresIn: '1h'})

console.log("This is the generated token using JWT credentials :", generateToken(API_KEY, API_SECRET))