
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const patienceRouter = require('./routes/patience-routers');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/test?gssapiServiceName=mongodb`);

app.use(cors());
app.use(bodyParser.json());

//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api', patienceRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
});