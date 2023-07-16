const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes');
const connectDB = require('./db');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(express.json());



app.use('/api', router);

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
    }
);