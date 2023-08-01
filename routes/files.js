const readFile = (req, res) => {
    console.log('reading file');
    const key = req.params.key;
    console.log(req, 'Hi!')
    const params = {
      Bucket: bucketName,
      Key: key,
    };
  
    s3.getObject(params, (err, data) => {
      if (err) {
        console.error(err);
        res.status(404).send('JSON object not found.');
      } else {
        const jsonObject = JSON.parse(data.Body);
        res.json(jsonObject);
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

module.export = { readFile, updateFile };