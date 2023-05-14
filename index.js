const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Updating file from server for testing purposes

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(path.join(__dirname, '/coming-soon.html'));

});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
