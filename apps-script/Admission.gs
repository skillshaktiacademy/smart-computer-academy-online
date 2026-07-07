/**
 * Smart Computer Academy — Admission Enquiry backend.
 * Stores each website submission as a row in the "SCA Admission" Google Sheet.
 *
 * SETUP
 * 1. Open the Google Spreadsheet (create a sheet/tab named "SCA Admission").
 * 2. Extensions → Apps Script, paste this file.
 * 3. Deploy → New deployment → type "Web app"
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 4. Copy the /exec URL into src/data/admissionForm.js (ADMISSION_ENDPOINT).
 *
 * The website posts a JSON body (Content-Type: text/plain, a "simple" CORS
 * request), so we read e.postData.contents. Column order below matches the
 * form fields in src/data/admissionForm.js exactly.
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SCA Admission");
  var data = JSON.parse(e.postData.contents);

  // Add a header row the first time (optional, keeps the sheet readable).
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp", "Student Name", "Guardian Name", "Mobile", "WhatsApp",
      "Email", "Date of Birth", "Gender", "Qualification", "Interested Course",
      "Preferred Batch", "Address", "City", "State", "Pincode",
      "Preferred Contact Time", "Heard From", "Additional Message"
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.studentName,
    data.guardianName,
    data.mobile,
    data.whatsapp,
    data.email,
    data.dateOfBirth,
    data.gender,
    data.qualification,
    data.interestedCourse,
    data.preferredBatch,
    data.address,
    data.city,
    data.state,
    data.pincode,
    data.preferredContactTime,
    data.heardFrom,
    data.additionalMessage
  ]);

  return ContentService
    .createTextOutput(
      JSON.stringify({
        success: true,
        message: "Admission Enquiry Submitted Successfully"
      })
    )
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ success: true, message: "SCA Admission endpoint is live." }))
    .setMimeType(ContentService.MimeType.JSON);
}
