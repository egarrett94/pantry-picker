require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { default: axios } = require('axios');

const app = express();
const port = process.env.PORT || 5000;

const edamamURI = `https://api.edamam.com/search?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}`

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', async (req, res) => {
    let result
    let params
    const { ingredients, diet, health } = req.body;

    if (health && diet) {
      params = `&q=${ingredients}&health=${health}&diet=${diet}&to=10`
    } else if (health) {
      params = `&q=${ingredients}&health=${health}&to=10`
    } else if (diet) {
      params = `&q=${ingredients}&diet=${diet}&to=10`
    } else {
      params = `&q=${ingredients}&to=10`
    }

    await axios.get(edamamURI + params)
        .then(({ data }) => {
            result = data;
        })
        .catch(err => console.log(err))

    res.send(result)
});

// app.get('/', function(req, res) {
// 	var recipe = null;
// 	var queryString = req.query.search;
// 	var healthOption = req.query.selectionbox;

// 	//encodeURI() 
// 	if (!(healthOption === 'null')) {
// 		recipeUrl = 'https://api.edamam.com/search?app_id=' + process.env.API_ID + '&app_key=' + process.env.API_KEY + '&q=' + queryString + '&health=' + healthOption + '&to=100';
// 	} else {
// 		recipeUrl = 'https://api.edamam.com/search?app_id=' + process.env.API_ID + '&app_key=' + process.env.API_KEY + '&q=' + queryString + '&to=100';
// 	};
//     request(recipeUrl, function(error, response, body) {
//     	try {
//     		recipe = JSON.parse(body);
//     	} catch(e) {
//     		res.status(400).render('recipes/404error'); 
//     	};

//         res.render('recipes/all', { recipe: recipe });
//     });
// });


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));