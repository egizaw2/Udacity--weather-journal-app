projectData={}
zipData= {}
// Cors for cross origin allowance
const cors = require('cors');
const fetch = require('node-fetch')
app.use(cors());
// Setup empty JS object to act as endpoint for all routes


// Setup Server
const port = 8000;

const server = app.listen(port, listening);
function listening(){
console.log('server');
console.log(`localhost: ${port}`);
}; 
// Require Express to run server and routes
const express = require.express();
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Initialize the main project folder
app.use(express.static("website"));


const zipData = [];

//POST 
app.post('/addZip', (req, res) => {

    const {date, temp, content} = req.body
    //newEntry ={
        zipData[date]= {
            temp, content
        }
        res.send()
        })
//GET
app.get('/addZip', (req, res) => {
    res.send(zipData)
  })
