// Config for the Admission Enquiry form.
// The Apps Script web app writes each submission as a row in the
// "SCA Admission" Google Sheet. Keep FIELD ORDER in sync with the
// appendRow() order in apps-script/Admission.gs.

// TODO: Replace with the /exec URL of the Admission Apps Script deployment.
// (Deploy apps-script/Admission.gs as a Web app and paste its URL here.)
export const ADMISSION_ENDPOINT = 'YOUR_ADMISSION_GOOGLE_SCRIPT_WEB_APP_URL';

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
