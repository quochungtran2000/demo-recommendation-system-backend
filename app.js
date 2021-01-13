require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const uri  = process.env.MONGO_ATLAS_URL;
const PORT = process.env.PORT | 1708;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const { connection } = mongoose;

connection.once('open', () => {
    console.log('Mongo connected!');
})


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


// const keywordRouter = require('./routes/KeyWord.router');
// const ratingRouter = require('./routes/Rating.router');
const movieRouter = require('./routes/Movie.router');

// app.use('/keyword', keywordRouter);
// app.use('/rating', ratingRouter);
app.use('/', movieRouter);

app.listen(PORT, () => `demo-recommendation-system listening on ${PORT}`);
