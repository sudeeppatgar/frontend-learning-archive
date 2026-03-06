const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle POST request from form
app.post('/submit', (req, res) => {
    const { fname, mname, lname, dob,address1, address2,city, state, zip, country } = req.body;
    console.log(`Received: Name: ${fname}, middle name: ${mname}, last name: ${lname}, DOB: ${dob}, Address 1: ${address1}, Address 2: ${address2},
        city: ${city}, state: ${state}, zip code : ${zip}, country: ${country},`);
        const { tfname, tmname, tlname, tdob,taddress1, taddress2, texperience, tqualification, tcity, tstate, tzip, tcountry } = req.body;
    console.log(`Received: Name: ${tfname}, middle name: ${tmname}, last name: ${tlname}, Experience: ${texperience}, Qualification: ${tqualification}, DOB: ${tdob}, Address 1: ${taddress1}, Address 2: ${taddress2},
        city: ${tcity}, state: ${tstate}, zip code : ${tzip}, country: ${tcountry},`);
    
    res.json({ success: true, message: 'Form submitted successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});