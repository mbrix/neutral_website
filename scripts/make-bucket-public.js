const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const BUCKET = 'neutralproject.com';

const getAcl = (key) => {
  return new Promise((resolve, reject) => {
    s3.getObjectAcl({
      Bucket: BUCKET,
      Key: key,
    }, (err, data) => {
      resolve(data);
    });
  });
};

const makePublic = (key) => {
  return new Promise((resolve, reject) => {
    s3.putObjectAcl({
      Bucket: BUCKET,
      Key: key,
      ACL: 'public-read',
    }, (err, data) => {
      if (err) {
        console.log(err);
      }

      resolve(data);
    });
  });
};

s3.listObjectsV2({
  Bucket: BUCKET,
}, async (err, { Contents }) => {
  for (let i = 0; i < Contents.length; i += 1) {
    //const acl = await getAcl(Contents[i].Key);
    const result = await makePublic(Contents[i].Key);
    console.log(`Done: ${(i + 1)}/${Contents.length}`);
  }

  process.exit(0);
});
