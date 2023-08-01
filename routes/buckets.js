const createBucket = (req, res) => {
    console.log('create a bucket');
    const data = req.body;
    const params = {
        Bucket: bucketName,
        Key: `${Date.now()}.json`, // Use a unique key for each JSON object
        Body: JSON.stringify(data),
    };
    
    s3.upload(params, (err) => {
        if (err) {
        console.error(err);
        res.status(500).send('Failed to create the JSON object.');
        } else {
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

module.export = { createBucket, deleteBucket };