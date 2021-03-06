import express from 'express';

const router = express.Router();
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils';

router.get('/', (_req, res) => {
  const allPatients = patientService.getPublicEntries();
  res.json(allPatients);
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);
    const addedEntry = patientService.addEntry(newPatientEntry);
    res.json(addedEntry);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const patient = patientService.getEntry(id);
  res.json(patient);
});

router.post('/:id/entries', (req, res) => {
  const { id } = req.params;
  try {
    const updatedPatient = patientService.addMedicalEntry(id, req.body);
    res.json(updatedPatient?.entries);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default router;
