const express = require('express');
const app = express();
const PORT = process.env.PORT || 6050;

app.set('view engine', 'ejs');
// app.use(express.static())
app.use(express.json())
app.use('/', require('./Routes/createUser'));


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})