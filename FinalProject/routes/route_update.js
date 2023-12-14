import express from 'express';
import { updating } from '../controller/update.js';
import multer from 'multer';
const updated = multer();

export const update = express.Router();

update.put('/events/:id', updated.none(), updating)