import express from 'express';
import {adding} from '../controller/add.js'
import multer from 'multer';
const upload = multer();

export const add = express.Router();

add.post('/event',upload.none(), adding)

