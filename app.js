const express = require('express');
// const expressLayouts = require('express-ejs-layouts');
const app = express();
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser')
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser())
//app.use(expressLayouts);
const Game = require('./models/game');
const Player = require('./models/player');

app.get('/', function(request, response) {
  response.render('home'); //this renders the homepage straight away
});

app.post('/numberOfTravelers', function(req, res) {
  const numberTravelers = req.body.quantity; //storing the input value
  res.render('partyMembers', {partyMembers: numberTravelers}) //render next view and pass stored input to create it
})

app.post('/getSupplies', function(req, res) {
  const game = new Game(); //start a new game
  let nameObj = req.body //the players were packaged as an object
  for (var property in nameObj){ //so we pick them out with for/in loop
    let traveler = new Player(nameObj[property]) //instantiate a player for each name provided
    game.players.push(traveler) //and jam them into an array in the instantiated game
  }
  res.render('outset', {game: game}); //render next view and pass instantiated game
})

app.listen(3000, function(){
  console.log('listening on port 3000');
})
