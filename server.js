const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

// Init Middleware

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));

// Define routes

app.use('api/users', require('./routes/api/users'));
app.use('api/profile', require('./routes/api/profile'));
app.use('api/post', require('./routes/api/post'));
app.use('api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`The server is running on ${port}`)); // we used backticks for showing the port(it's optional)
