// index.js
const { Storage } = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

const BUCKET_NAME = 'backoffice-plano-alimentar';
const LOCAL_FILE = 'uploaded-test.txt'; 
const REMOTE_FILE = 'uploaded-test.txt';

async function uploadFile() {
  try {
    await storage.bucket(BUCKET_NAME).upload(LOCAL_FILE, {
      destination: REMOTE_FILE,
    });
    console.log(`✅ File ${LOCAL_FILE} uploaded to ${REMOTE_FILE}`);
  } catch (err) {
    console.error('❌ Upload failed:', err.message);
  }
}

uploadFile();