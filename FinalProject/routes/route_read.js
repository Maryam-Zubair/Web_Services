import express from 'express';
import {reading} from '../controller/read.js'
// import { Events } from '../model/event.js';

export const read = express.Router();

read.get('/events', reading)