import patientData from '../../data/patients.json';

import { PatientEntry, PatientPublicEntry } from '../types';

const patients: Array<PatientEntry> = patientData;

const getEntries = (): PatientEntry [] => {
  return patients;
};

export const getPublicEntries = (): PatientPublicEntry [] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id, name, dateOfBirth, gender, occupation
  }));
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  getPublicEntries,
  addEntry,
};
