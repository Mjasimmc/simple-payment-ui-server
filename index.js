import { config } from 'dotenv';
import express from 'express';
import cors from 'cors'

import api from './api.js';
import database from './database.js';


config()

const databaseurl = process.env.DATABASE_URL
database(databaseurl)

const app = express()

// congirations
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// to api routes
app.use('/api', api)

const port = process.env.PORT || 8000
app.listen(port, () => console.log("connected"))