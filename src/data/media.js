// ============================================================
// Central media source — all imagery is served from Unsplash.
// Swap any photo ID below to change the picture site-wide.
// URLs are verified to resolve (images.unsplash.com hotlinking
// is permitted by the Unsplash license).
// ============================================================

// Build a sized, optimized Unsplash URL from a photo id.
export const unsplash = (id, w = 800, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}` +
  (h ? `&h=${h}` : '');

// Named images used across the site.
export const media = {
  // Premium hero: a trainer guiding students at computers in a classroom.
  heroShowcase: unsplash('1778489769184-45868633c527', 1100),
  // Backup option (computer lab): unsplash('1723987251277-18fc0a1effd0', 1100)
  about: unsplash('1522202176988-66273c2fd55f', 900), // students collaborating
  classroom: unsplash('1723987251277-18fc0a1effd0', 1000), // students in a computer lab
  placement: unsplash('1552664730-d307ca884978', 900), // team / career
};

// Topical image per course (keyed by course name in siteInfo.courses).
const courseImageIds = {
  ADCA: '1516321318423-f06f85e504b3', // learning on laptop
  DCA: '1497032628192-86f99bcd76bc', // office desk / basics
  'Tally with GST': '1454165804606-c3d57bc86b40', // analytics / accounting
  CCC: '1550751827-4bd374c3f58b', // computer concepts / security
  DTTP: '1587829741301-dc798b83add3', // typing / keyboard
  'ADCA + AI': '1620712943543-bcc4688e7485', // AI / technology
  'Graphic Design': '1626785774573-4b799315345d', // design workspace
  'Web Development': '1547658719-da2b51169166', // code / web dev
  CTTC: '1531403009284-440f080d1e12', // teacher training / group
  PGDCA: '1461749280684-dccba630e2f6', // advanced coding
  'Basic to Advance': '1571260899304-425eee4c7efc', // student on computer
};

const DEFAULT_COURSE_ID = '1516321318423-f06f85e504b3';

export const courseImage = (name, w = 600) =>
  unsplash(courseImageIds[name] || DEFAULT_COURSE_ID, w);
