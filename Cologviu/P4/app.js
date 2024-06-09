const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const { inputText, optiune } = req.body;
    let sortedText;

    switch (optiune) {
        case 'alfabetic':
            sortedText = inputText.split(' ').sort().join(' ');
            break;
        case 'lungime':
            sortedText = inputText.split(' ').sort((a, b) => a.length - b.length).join(' ');
            break;
        default:
            sortedText = inputText;
    }

    res.send(`Textul sortat: ${sortedText}`);
});
