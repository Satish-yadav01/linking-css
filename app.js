const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts');

//EJS
app.use(expressLayout);
app.set('view engine', 'ejs');

//routes
app.get('/', (req, res) => {
    res.render('welcome');
})

//listen
const PORT = process.env.PORT || 4000;
app.listen(PORT);