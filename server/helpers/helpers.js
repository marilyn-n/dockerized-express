const aws = require('aws-sdk');
const s3 = new aws.S3();

const readFile = (req, res) => {
    const key = req.params.key;
    const params = {
      Bucket: "mi-balde-express",
      Key: key,
    };
  
    s3.getObject(params, (err, data) => {
      if (err) {
        console.error(err);
        res.status(404).send('JSON object not found. ');
      } else {
        console.log(data);
        res.send('retrieved file successfully ');
      }
    });
}

const createBucket = (req, res) => {
    const data = req.body;
    const params = {
        Bucket: "learning-to-create-buckets-1444",
        Key: `${Date.now()}.json`, // Use a unique key for each JSON object
        Body: JSON.stringify(data),
    };
    
    s3.upload(params, (err) => {
        if (err) {
        console.error(err);
        res.status(500).send('Failed to create the JSON object.');
        } else {
        console.log(data);
        res.send('JSON object created successfully.');
        }
    });
}

const deleteBucket = (req, res) => {
    const bucketName = 'myjson'; // Replace with your S3 bucket name
    const key = req.params.key;
    const params = {
      Bucket: bucketName,
      Key: key,
    };
  
    s3.deleteObject(params, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Failed to delete the JSON object.');
      } else {
        res.send('JSON object deleted successfully.');
        res.json({ error: 'JSON object deleted successfully.'});
        res.status(500);
      }
    });
  }

const updateFile = (req, res) => {
    const key = req.params.key;
    const data = req.body;
    const params = {
      Bucket: bucketName,
      Key: key,
      Body: JSON.stringify(data),
    };
  
    s3.upload(params, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Failed to update the JSON object.');
      } else {
        res.send('JSON object updated successfully.');
      }
    });
}



module.exports = { readFile, createBucket, deleteBucket, updateFile};