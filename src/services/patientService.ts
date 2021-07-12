import {v1 as uuid} from 'uuid';
import patientEntries from '../../data/patients';

import {
  Patient,
  PatientPublicEntry,
  NewPatientEntry,
  PublicPatient,
  Entry
} from '../types';

const patients: Array<Patient> = patientEntries;

const getEntries = (): Patient [] => {
  return patients;
};

const getPublicEntries = (): PatientPublicEntry [] => {
  return patientEntries.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id, name, dateOfBirth, gender, occupation, entries
  }));
};

const addEntry = (patientData: NewPatientEntry): Patient => {
  const id: string = uuid();
  const newPatient = {...patientData, id};

  patientEntries.push(newPatient);

  return newPatient;
};

const getEntry = (id: string): PublicPatient | undefined => {
  return patientEntries.find(patient => patient.id === id);
};

const addMedicalEntry = (id: string, entry: Entry) => {
  const patient = patientEntries.find(p => p.id === id);
  if (patient) {
    const medicalEntries: Array<Entry> = patient.entries;
    patient.entries = [...medicalEntries, entry];
  }
  return patient;
};

export default {
  getEntries,
  getPublicEntries,
  addEntry,
  getEntry,
  addMedicalEntry
};
