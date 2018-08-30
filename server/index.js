const express = require('express');
var bodyParser = require('body-parser');
const app = express();

const randomHelper = require('./../libs/helpers/random.js');


// recommendation, explanation is fuzzy, ask NFD >

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));
//app.get('/', (req, res) => res.send('Hello world FFF'));

var red = randomHelper.generateCluster('red', {min: 0, max: 10}, {min: 0, max: 10}, 20);
var blue = randomHelper.generateCluster('blue', {min: 15, max: 20}, {min: 15, max: 20}, 20);
var yellow = randomHelper.generateCluster('yellow', {min: 15, max: 30}, {min: 0, max: 5}, 20);

var data = red;
data = data.concat(blue);
data = data.concat(yellow);

app.get('/api/data.json', (req, res) => {
	res.json(data);
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));