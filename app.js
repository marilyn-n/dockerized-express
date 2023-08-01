const express = require('express');
const aws = require('aws-sdk');
const bodyParser = require('body-parser');
const {createBucket, deleteBucket} = require("./routes/buckets")
const {readFile, updateFile} = require("./routes/files")

const app = express();
const port = 3000; // Choose a port number

// Configure AWS SDK with your credentials
aws.config.update({
  accessKeyId: 'YOUR_AWS_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_AWS_SECRET_ACCESS_KEY',
});

// const s3 = new aws.S3();

// // Middleware to parse JSON bodies
app.use(bodyParser.json());

// CRUD operations

// Create a new JSON object in the S3 bucket
app.post('/create', (req, res) => createBucket(req, res));

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Read a JSON object from the S3 bucket
app.get('/read/:key', (req, res) => readFile(req, res));

// Update a JSON object in the S3 bucket
app.put('/update/:key', (req, res) => updateFile(req, res));

// Delete a JSON object from the S3 bucket
app.delete('/delete/:key', (req, res) => deleteBucket(req, res));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
