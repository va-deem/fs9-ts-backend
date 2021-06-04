import {v1 as uuid} from 'uuid';
import patientEntries from '../../data/patients';

import { PatientEntry, PatientPublicEntry, NewPatientEntry, PublicPatient } from '../types';

const patients: Array<PatientEntry> = patientEntries;

const getEntries = (): PatientEntry [] => {
  return patients;
};

const getPublicEntries = (): PatientPublicEntry [] => {
  return patientEntries.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id, name, dateOfBirth, gender, occupation, entries
  }));
};

const addEntry = (patientData: NewPatientEntry): PatientEntry => {
  const id: string = uuid();
  const newPatient = {...patientData, id};

  patientEntries.push(newPatient);

  return newPatient;
};

const getEntry = (id: string): PublicPatient | undefined => {
  return patientEntries.find(patient => patient.id === id);
};

export default {
  getEntries,
  getPublicEntries,
  addEntry,
  getEntry
};
