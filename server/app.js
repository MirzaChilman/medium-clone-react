const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cloudinary = require('cloudinary');

const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/medium';

/* CLOUDINARY CONFIG */
cloudinary.config({
  cloud_name: 'pentone',
  api_key: '629429351735423',
  api_secret: 'f2i5AczHzYkyNHzenvetaarbing'
});

/* CONNET TO MONGOD DB */
try {
  mongoose.connect(
    url,
    {
      //useMongoClient: true
    }
  );
} catch (error) {
  console.log(error);
}

let port = 5000 || process.env.PORT;

/* SET UP ROUTES (API ENDPOINTS) */
routes(router);

/* MIDDLEWARE */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
//app.use('/static', express.static(path.join(__dirname,'static')))

app.use('/api', router);
/* SERVER CONFIG */
app.listen(port, () => {
  console.log(`Server stated at port ${port}`);
});
