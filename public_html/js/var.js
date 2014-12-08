//Server adress (php)
var serverUrl = "../../tarot_clean/server/";

//Id of the selected team in database (set to skip players selection)
var teamId;// = 1;

//Number of actual players
var nbPlayers = 0;

//List of players
var playersList = [];

//Default animation duration (in ms)
var animTime = 200;

//Templates
var buttonTemplate;
var switchTemplate;