import express from 'express';
import {removing } from '../controller/remove.js'

export const remove = express.Router();

remove.delete('/events/:id', removing)