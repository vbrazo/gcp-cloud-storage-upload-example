// upload.test.js
const fs = require('fs');
const { Storage } = require('@google-cloud/storage');
const assert = require('assert');

const storage = new Storage();
const BUCKET_NAME = 'backoffice-plano-alimentar';
const LOCAL_FILE = 'test-upload.txt';
const REMOTE_FILE = 'test-uploaded-file.txt';

describe('GCP Storage Upload', function () {
  before(() => {
    fs.writeFileSync(LOCAL_FILE, 'Test file content');
  });

  after(() => {
    if (fs.existsSync(LOCAL_FILE)) fs.unlinkSync(LOCAL_FILE);
  });

  it('uploads file to GCP bucket', async function () {
    await storage.bucket(BUCKET_NAME).upload(LOCAL_FILE, {
      destination: REMOTE_FILE,
    });

    const [exists] = await storage
      .bucket(BUCKET_NAME)
      .file(REMOTE_FILE)
      .exists();

    assert.strictEqual(exists, true);

    // Cleanup
    await storage.bucket(BUCKET_NAME).file(REMOTE_FILE).delete();
  });
});
