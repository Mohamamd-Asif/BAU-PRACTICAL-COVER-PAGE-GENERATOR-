
# BAU Practical and Assignment Cover Page Generator

A static, print-friendly web application for generating Bangladesh Agricultural University cover pages.

## Pages

- `index.html` - Batch practical notebook cover generator
- `assignment.html` - Single or batch assignment cover generator

## Features

- Automatic student name, registration number, session, faculty, and degree lookup
- Live teacher directory refresh with embedded fallback data
- Live course code and title refresh with embedded fallback catalog
- Default course `SS 1101 - Introductory Soil Science`
- Default assignment teacher `Dr. Abu Zofar Md. Moslehuddin`
- Bulk Student ID paste and consecutive ID generation
- A4 preview and print/PDF output

## APIs

The application expects the following endpoints:

- `https://asif.bdasif321.workers.dev/` - Student lookup; send `?id=<Student ID>`
- `https://asif.bdasif321.workers.dev/teachers` - Teacher records
- `https://asif.bdasif321.workers.dev/courses` - Course records

Teacher and course responses may be arrays or `{ "data": [...] }` / `{ "teachers": [...] }` / `{ "courses": [...] }` objects.

Live data is cached in browser `localStorage`. Embedded course and teacher datasets remain available when an endpoint is offline.

## Run locally

Because both pages use browser APIs and `fetch`, serve the directory with a local HTTP server:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/`.

## Tests

```bash
npm test
```

The test suite validates default values, live data endpoints, duplicate IDs, and key print/mobile rules.
