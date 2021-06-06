export enum Gender {
  Male = 'male',
  Female = 'female',
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries: Entry[]
}

export type PatientPublicEntry = Omit<Patient, 'ssn'>;

export type NewPatientEntry = Omit<Patient, 'id'>;

export interface DiagnoseEntry {
  code: string;
  name: string;
  latin?: string;
}

interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<DiagnoseEntry['code']>
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

export type HospitalDischarge = {
  date: string;
  criteria: string;
};

interface HospitalEntry extends BaseEntry {
  type: 'Hospital';
  discharge: HospitalDischarge;
}

interface OccupationalHealthcareEntry extends BaseEntry {
  type: 'OccupationalHealthcare';
  employerName: string;
  sickLeave?: { startDate: string; endDate: string };
}


export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;

export type PublicPatient = Omit<Patient, 'ssn' | 'entries'>;
