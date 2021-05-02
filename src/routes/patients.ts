import express from 'express';
const router = express.Router();
import { getPublicEntries } from '../services/patientService';

router.get('/', (_req, res) => {
  const allPatients = getPublicEntries();
  res.json(allPatients);
});

export default router;
