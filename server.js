// Import express module
const express = require('express');

// Import fs (filesystem) module
const fs = require('fs');

// body parser module
const bodyParser = require('body-parser');

// return express function
const app = express();

// Load stylesheets and images files
app.use('/css', express.static( __dirname + "/css"));
app.use('/img', express.static( __dirname + "/img"));
app.use('/js', express.static( __dirname + "/js"));
app.use('/', express.static( __dirname + "/"));

// When user routes to Home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Home.html');

    // Check file existence
    if (fs.existsSync("data.json")){
        console.log("File data.json found")
    }else{
        fs.writeFileSync("data.json", "");
    }
});

app.get('/Home', (req, res) => {
    // Send the Home html page to the client
    res.sendFile(__dirname + '/Home.html');
});

// When User routes to podcaster Joe
app.get('/joe', (req, res) => {
    // Send the joe html page to the client
    res.sendFile(__dirname + '/joe.html');

});

// When User routes to podcaster Mfceo
app.get('/mfceo', (req, res) => {
    // Send the mfceo page to the client
    res.sendFile(__dirname + '/mfceo.html');
});

// When User routes to podcaster Mfceo
app.get('/thetime', (req, res) => {
    // Send the thetime page to the client
    res.sendFile(__dirname + '/thetime.html');
});


app.use(bodyParser.urlencoded({ extended: true })); 

// Store all podcasts
let podcasts = [];


// When User submit
app.post('/contact', (req, res) => {
    // Get all entries
    const podcast = {
        "Subtitle": req.body.subtitle,
        "Title": req.body.title,
        "Description": req.body.description
    };

    // Add entries to podcasts
    podcasts.push(podcast);

    // Convert entreis to json format
    res.json(podcasts);
    
    // Show all podcasts
    console.log(podcasts);

});

app.get('/contact', (req, res) => {
    // res.json(podcasts);
});

// Listen on port 3000 
const port = 3000;
app.listen(port, () => console.log(`Listenin on port ${port}`));
