const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes')
const app = express();




app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes)

app.use(bodyParser.json({ extended: false }));

// @desc Access api control
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'POST, GET, PUT, DELETE, PATCH'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, Content-Type, X-Auth-Token'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/', (req, res) => {
    res.json({ message: 'running' });
});

// require('./routes/routes')(app);
app.use('/api/user', require('./routes/routes'));
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const db = require('./models');
db.sequelize.sync();
