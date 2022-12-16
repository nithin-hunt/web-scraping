const express = require('express');
const app = express();
const getRoutes = require('./routes/getRoutes');

// middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.use('/api/v1', getRoutes);

app.listen(5000, () => {
    console.log("App is running on port 5000");
})