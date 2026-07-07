/**
 * Smart Computer Academy — Franchise Enquiry backend.
 *
 * Stores each submission from the website's Franchise Enquiry Form as a row
 * in the "SCA Franchise" Google Sheet.
 *
 * SETUP
 * 1. Open the target Google Spreadsheet (or create one).
 * 2. Extensions → Apps Script, paste this file.
 * 3. Deploy → New deployment → type "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 4. Copy the /exec URL into src/data/franchiseForm.js (FRANCHISE_ENDPOINT).
 *
 * The frontend sends a JSON body with Content-Type: text/plain (a "simple"
 * CORS request), so we parse e.postData.contents. A form-encoded fallback is
 * also handled for convenience/testing.
 */

var SHEET_NAME = 'SCA Franchise';

// Column order — keep in sync with initialValues in src/data/franchiseForm.js.
var FIELDS = [
  'contactPerson',
  'instituteName',
  'mobile',
  'whatsapp',
  'email',
  'aadharNumber',
  'address',
  'city',
  'state',
  'pincode',
  'totalComputers',
  'totalStaff',
  'instituteArea',
  'existingInstitute',
  'interestedCourses',
  'preferredContactTime',
  'heardFrom',
  'additionalMessage',
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(30000);
  try {
    var data = parseBody(e);
    var sheet = getSheet();

    var row = [new Date()];
    for (var i = 0; i < FIELDS.length; i++) {
      row.push(data[FIELDS[i]] || '');
    }
    sheet.appendRow(row);

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ success: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  // Simple health check.
  return jsonResponse({ success: true, message: 'SCA Franchise endpoint is live.' });
}

function parseBody(e) {
  if (e && e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents);
    } catch (ignore) {
      // Not JSON — fall through to form params.
    }
  }
  return (e && e.parameter) || {};
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    var header = ['Timestamp'].concat(
      FIELDS.map(function (f) {
        return f.charAt(0).toUpperCase() + f.slice(1);
      })
    );
    sheet.appendRow(header);
    sheet.getRange(1, 1, 1, header.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
