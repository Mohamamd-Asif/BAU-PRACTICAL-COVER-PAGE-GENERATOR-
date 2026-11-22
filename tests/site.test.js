const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const assignment = fs.readFileSync(path.join(root, "assignment.html"), "utf8");

test("practical page defaults to SS 1101", () => {
  assert.match(index, /id="courseNo" value="SS 1101"/);
  assert.match(index, /id="courseTitle" value="Introductory Soil Science"/);
});

test("assignment page keeps the SS 1101 default and existing teacher", () => {
  assert.match(assignment, /id="courseCode"[^>]*value="SS 1101"/);
  assert.match(assignment, /id="courseTitle" value="Introductory Soil Science"/);
  assert.match(assignment, /id="tName" value="Dr\. Abu Zofar Md\. Moslehuddin"/);
});

test("both pages expose live teacher and course refresh endpoints", () => {
  assert.match(assignment, /TEACHERS_API_URL = "https:\/\/asif\.bdasif321\.workers\.dev\/teachers"/);
  assert.match(assignment, /COURSES_API_URL = "https:\/\/asif\.bdasif321\.workers\.dev\/courses"/);
  assert.match(index, /workers\.dev\/courses/);
});

test("anti-inspection debugger block is removed", () => {
  assert.doesNotMatch(index, /Developer Inspection is Restricted/);
  assert.doesNotMatch(index, /constructor\("debugger"\)/);
});

test("A4 print rules and mobile breakpoints remain present", () => {
  assert.match(index, /@media print/);
  assert.match(index, /@media \(max-width: 640px\)/);
  assert.match(assignment, /@media print/);
  assert.match(assignment, /@media \(max-width: 640px\)/);
});

