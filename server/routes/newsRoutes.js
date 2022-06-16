import express from 'express';
import {
  addArtical,
  getLastFiveArtical,
} from '../controller/newsController.js';

const router = express.Router();

router.post('/', addArtical);
router.get('/', getLastFiveArtical);

export default router;
