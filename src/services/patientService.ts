import {v1 as uuid} from 'uuid';
import patientEntries from '../../data/patients';

import { PatientEntry, PatientPublicEntry, NewPatientEntry } from '../types';

const patients: Array<PatientEntry> = patientEntries;

const getEntries = (): PatientEntry [] => {
  return patients;
};

const getPublicEntries = (): PatientPublicEntry [] => {
  return patientEntries.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id, name, dateOfBirth, gender, occupation
  }));
};

const addEntry = (patientData: NewPatientEntry): PatientEntry => {
  const id: string = uuid();
  const newPatient = {...patientData, id};

  patientEntries.push(newPatient);

  return newPatient;
};

export default {
  getEntries,
  getPublicEntries,
  addEntry,
};
