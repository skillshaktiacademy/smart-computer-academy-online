// Config for the Admission Enquiry form.
// The Apps Script web app writes each submission as a row in the
// "SCA Admission" Google Sheet. Keep FIELD ORDER in sync with the
// appendRow() order in apps-script/Admission.gs.

// Deployed Apps Script web app for the "SCA Admission" Google Sheet.
export const ADMISSION_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwpT_DZoD-7UyY_Pq_zb6fzqkd_hiR5RSeSTeieQZELO4sF1nGLZ8XGbDe_ka_kjWX9Bw/exec';

export const initialValues = {
  studentName: '',
  guardianName: '',
  mobile: '',
  whatsapp: '',
  email: '',
  dateOfBirth: '',
  gender: '',
  qualification: '',
  interestedCourse: '',
  preferredBatch: '',
  address: '',
  city: '',
  state: '',
  pincode: '',
  preferredContactTime: '',
  heardFrom: '',
  additionalMessage: '',
};

export const genderOptions = ['Male', 'Female', 'Other'];

export const qualificationOptions = [
  'Below 10th',
  '10th Pass',
  '12th Pass',
  'Graduate',
  'Post Graduate',
  'Other',
];

export const preferredBatchOptions = [
  'Morning (9 AM - 12 PM)',
  'Afternoon (12 PM - 4 PM)',
  'Evening (4 PM - 8 PM)',
  'Any Batch',
];

export const preferredContactTimeOptions = [
  'Morning (9 AM - 12 PM)',
  'Afternoon (12 PM - 4 PM)',
  'Evening (4 PM - 8 PM)',
  'Any Time',
];

export const heardFromOptions = [
  'Google',
  'Facebook',
  'Instagram',
  'YouTube',
  'Friend / Relative',
  'Banner / Poster',
  'Existing Student',
  'Other',
];
