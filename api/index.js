const express = require("express");
const mongoose = require("mongoose");
const cvRoutes = require('./routes/cv');
const authRoutes = require('./routes/auth');
const avatarRoutes = require('./routes/avatar');
var cors = require('cors');
const app = express();

app.use(express.json()); //application/json

app.use(cors());

app.use("/avatars", express.static("uploads"));
app.use('/images/upload', avatarRoutes);


app.use('/auth', authRoutes);
app.use('/cv', cvRoutes);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

mongoose.connect('mongodb://127.0.0.1:27017/dmwm23', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(app.listen(process.env.PORT || 3000, console.log("Server started !")))
    .catch(err => console.log(err));





