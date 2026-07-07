/**
 * Smart Computer Academy — Franchise Enquiry backend.
 * Stores each website submission as a row in the "SCA Franchise" Google Sheet.
 *
 * SETUP
 * 1. Open the Google Spreadsheet that has a sheet/tab named "SCA Franchise".
 * 2. Extensions → Apps Script, paste this file.
 * 3. Deploy → New deployment → type "Web app"
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 4. Copy the /exec URL into src/data/franchiseForm.js (FRANCHISE_ENDPOINT).
 *
 * The website posts a JSON body (Content-Type: text/plain, a "simple" CORS
 * request), so we read e.postData.contents. Column order below matches the
 * form fields in src/data/franchiseForm.js exactly.
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SCA Franchise");
  var data = JSON.parse(e.postData.contents);

  // Add a header row the first time (optional, keeps the sheet readable).
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp", "Contact Person", "Institute Name", "Mobile", "WhatsApp",
      "Email", "Aadhar Number", "Address", "City", "State", "Pincode",
      "Total Computers", "Total Staff", "Institute Area", "Existing Institute",
      "Interested Courses", "Preferred Contact Time", "Heard From", "Additional Message"
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.contactPerson,
    data.instituteName,
    data.mobile,
    data.whatsapp,
    data.email,
    data.aadharNumber,
    data.address,
    data.city,
    data.state,
    data.pincode,
    data.totalComputers,
    data.totalStaff,
    data.instituteArea,
    data.existingInstitute,
    data.interestedCourses,
    data.preferredContactTime,
    data.heardFrom,
    data.additionalMessage
  ]);

  return ContentService
    .createTextOutput(
      JSON.stringify({
        success: true,
        message: "Enquiry Submitted Successfully"
      })
    )
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ success: true, message: "SCA Franchise endpoint is live." }))
    .setMimeType(ContentService.MimeType.JSON);
}
