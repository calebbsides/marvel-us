const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const api = require('./api');

app.use(express.static('build'))

app.get('/', (req, res) => {
    res.sendFile(__dirname, 'build', 'index.html');
});

app.use('/api', api)

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});

module.exports = app;