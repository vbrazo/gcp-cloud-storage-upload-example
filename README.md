# GCP Cloud Storage Demo (Node.js)

This project demonstrates how to upload files to a Google Cloud Storage bucket using Node.js and the official `@google-cloud/storage` SDK.

## 🚀 Features

- Upload a local file to a GCP bucket
- Simple setup using service account authentication
- Easy to extend for downloading or listing files

---

## 🛠 Requirements

- Node.js (v14+ recommended)
- A Google Cloud project with **Cloud Storage API** enabled
- A **service account key** with `Storage Object Admin` permissions

---

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/gcp-storage-demo.git
cd gcp-storage-demo
```

2. **Install dependencies:**

```bash
npm install
```

## 🔐 Authentication

This project uses a service account to authenticate with GCP.
- Go to IAM & Admin > Service Accounts in the Google Cloud Console.
- Create a service account (if you don’t already have one).
- Grant it the Storage Admin or Storage Object Admin role.
- Create and download a JSON key.
- Set the environment variable:

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/absolute/path/to/your-key.json"
```

## 📁 Prepare a Test File

```bash
echo "Hello from GCP Storage!" > test-upload.txt
```

## 🚀 Run the Upload Script

Make sure to edit index.js and set your bucket name:

```js
const BUCKET_NAME = 'your-bucket-name'; // <-- replace this
```

Then run:

```bash
node index.js
```

If successful, you should see:

```
✅ File test-upload.txt uploaded to uploaded-test.txt
```

## 📂 Project Structure

```
.
├── index.js               # Main upload script
├── upload.test.js         # Mocha test for uploading and cleanup
├── test-upload.txt        # Sample file to upload
├── package.json
└── README.md
```

## 🧪 Run Tests

This project includes a test that uploads a file, checks if it exists, and deletes it from the bucket.
- Update upload.test.js with your bucket name.
- Run the test:

```bash
npm install --save-dev mocha
npm test
```

Or manually with

```bash
npx mocha upload.test.js
```

## 📌 Notes

-	Make sure your bucket name is globally unique
-	If using this in production, do not commit your JSON key
-	You can extend this to include file download, list, and delete operations
