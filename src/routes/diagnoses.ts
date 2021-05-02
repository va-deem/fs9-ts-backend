import express from 'express';
const router = express.Router();
import { getEntries } from '../services/diagnoseService';

router.get('/', (_req, res) => {
  const allDiagnoses = getEntries();
  res.json(allDiagnoses);
});

export default router;
