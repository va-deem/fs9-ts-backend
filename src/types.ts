export enum Gender {
  male = 'male',
  female = 'female',
}

export interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

export type PatientPublicEntry = Omit<PatientEntry, 'ssn'>;

export type NewPatientEntry = Omit<PatientEntry, 'id'>;

export interface DiagnoseEntry {
  code: string;
  name: string;
  latin?: string;
}
