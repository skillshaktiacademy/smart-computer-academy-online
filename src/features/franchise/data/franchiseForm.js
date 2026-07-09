// Config for the Franchise Enquiry form.
// The Apps Script web app writes each submission as a row in the
// "SCA Franchise" Google Sheet. Keep FIELD ORDER in sync with the
// header row in apps-script/Code.gs.

export const FRANCHISE_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbxh1AUX_vsxTMmgX3LnGj5viy74OR2b-h27419PN7L-eBJ4mivCwY82D8ITpYCOkiKQ/exec';

export const initialValues = {
  contactPerson: '',
  instituteName: '',
  mobile: '',
  whatsapp: '',
  email: '',
  address: '',
  city: '',
  state: '',
  pincode: '',
  totalComputers: '',
  totalStaff: '',
  instituteArea: '',
  existingInstitute: '',
  interestedCourses: '',
  preferredContactTime: '',
  heardFrom: '',
  additionalMessage: '',
};

export const existingInstituteOptions = ['Yes', 'No'];

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
  'Friend',
  'Existing Franchise',
  'Other',
];
