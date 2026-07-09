/**
 * Smart Computer Academy — Admission Enquiry backend.
 * Stores each website submission as a row in the "SCA Admission" Google Sheet.
 * (Deployed version.)
 *
 * DEPLOY: Deploy → New deployment → Web app → Execute as: Me, Access: Anyone.
 * The /exec URL lives in src/features/admission/data/admissionForm.js.
 */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SCA Admission");

    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("SCA Admission");
      sheet.appendRow([
        "Timestamp",
        "Student Name",
        "Guardian Name",
        "Mobile",
        "WhatsApp",
        "Email",
        "Date Of Birth",
        "Gender",
        "Qualification",
        "Interested Course",
        "Preferred Batch",
        "Address",
        "City",
        "State",
        "Pincode",
        "Preferred Contact Time",
        "Heard From",
        "Additional Message"
      ]);
    }

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.studentName || "",
      data.guardianName || "",
      data.mobile || "",
      data.whatsapp || "",
      data.email || "",
      data.dateOfBirth || "",
      data.gender || "",
      data.qualification || "",
      data.interestedCourse || "",
      data.preferredBatch || "",
      data.address || "",
      data.city || "",
      data.state || "",
      data.pincode || "",
      data.preferredContactTime || "",
      data.heardFrom || "",
      data.additionalMessage || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: "Admission submitted successfully." }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ success: true, message: "SCA Admission endpoint is live." }))
    .setMimeType(ContentService.MimeType.JSON);
}
