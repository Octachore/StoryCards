// ------------ Data fields ------------
var data_characters = null;
var data_places = null;
var data_objects = null;

// ------------ Fields ------------
var characters;
var objects;
var places;
var genders;

var forcedFirstGender = null;
var forcedFirstCharacter = null;
var forcedSecondGender = null;
var forcedSecondCharacter = null;
var forcedObject = null;
var forcedPlace = null;
var cheatEnabled = false;

var story = {
	firstCharacter: null,
	firstCharacterGender: null,
	secondCharacter: null,
	secondCharacterGender: null,
	object: null,
	place: null
};

var characterTextArea;
var objectTextArea;
var placeTextArea;
// ------------ Module ------------
var app = angular.module('storyTarot',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'TarotController'
        })

        // route for the cards page
        .when('/cards', {
            templateUrl : 'views/cards.html',
            controller  : 'CardsController'
        });
});


app.controller('TarotController', function($scope, storyService) {
	initData($scope, storyService);
	$scope.date = new Date();
	$scope.makeStory = function(){
		makeStory();
	}
	$scope.setFirstCharacterGender = function(gender){
		setFirstCharacterGender(gender);
	}
	$scope.setFirstCharacter = function(character){
		setFirstCharacter(character);
	}
	$scope.setSecondCharacterGender = function(gender){
		setSecondCharacterGender(gender);
	}
	$scope.setSecondCharacter = function(character){
		setSecondCharacter(character);
	}
	$scope.setObject = function(object){
		setObject(object);
	}
	$scope.setPlace =  function(place){
		setPlace(place);
	}
	$scope.cheat= function(isChecked){
		cheat(isChecked);
	}
	this.story = story;
	$scope.characters = characters;
	$scope.objects = objects;
	$scope.places = places;
	$scope.genders = genders;
});

app.controller('CardsController', function($scope, $location) {
		cheatEnabled = false;
		setTextAreas();
    $scope.characterTextArea = characterTextArea;
    $scope.objectTextArea = objectTextArea;
    $scope.placeTextArea = placeTextArea;
    $scope.validate = function(){
    	data_characters = parseCharacters($scope.characterTextArea);
    	data_objects = parseObjectsOrPlaces($scope.objectTextArea);
    	data_places = parseObjectsOrPlaces($scope.placeTextArea);
    	$location.path('/')
    }
});

app.factory('storyService', function($http) {

    var getData = function() {
        return $http.get('defaultStoryData.json').then(function(result){
            return result.data;
        });
    };
    return { getData: getData };
});

app.filter('firstCharacterDisplay', function() {
  return function(character) {
  	return characterDisplay(character, forcedFirstGender);
  }
});

app.filter('secondCharacterDisplay', function() {
  return function(character) {
  	return characterDisplay(character, forcedSecondGender);
  }
});


function characterDisplay(character, gender){
	switch(gender){
    	case 'male':
    		return character.maleName;
    		break;
  		case 'female':
  			return character.femaleName;
			default:
				return character.maleName + '/' + character.femaleName;
  }
}
// ------------ Utilities ------------

function initData($scope, storyService) {
    var storyDataPromise = storyService.getData();
    storyDataPromise.then(function(result) { 
    	if(data_characters == null)
       	data_characters = result.characters;
      if(data_objects == null)
       	data_objects = result.objects;
      if(data_places == null)
       	data_places = result.places;
       makeStory();
	    });
	}

function selectCard(array){
	var selectedCardId = Math.floor(Math.random()*array.length);
	var selectedCard = array[selectedCardId];
	array.splice(selectedCardId,1);
	return selectedCard;
}

function selectCharacters(){
	story.firstCharacter = (forcedFirstCharacter == null || cheatEnabled == false) ? selectCard(characters) : forcedFirstCharacter;
	story.secondCharacter = (forcedSecondCharacter == null || cheatEnabled == false) ? selectCard(characters) : forcedSecondCharacter;
	
	if(forcedFirstGender != null && cheatEnabled == true){
		story.firstCharacterGender = forcedFirstGender;
	}else if(story.firstCharacterGender == null){
		if(Math.random() < 0.5)
			story.firstCharacterGender = "male";
		else
			story.firstCharacterGender = "female";
	}

	if(forcedSecondGender != null && cheatEnabled == true){
		story.secondCharacterGender = forcedSecondGender;
	}else if(story.secondCharacterGender == null){
		if(Math.random() < 0.5)
			story.secondCharacterGender = "male";
		else
			story.secondCharacterGender = "female";
	}
}


function selectObject(){

	story.object = (forcedObject == null || cheatEnabled == false) ? selectCard(objects) : forcedObject;
}

function selectPlace(){

	story.place = (forcedPlace == null || cheatEnabled == false) ? selectCard(places) : forcedPlace;
}


function makeStory(){
	story.firstCharacterGender = null;
	story.secondCharacterGender = null;
	populate();
	selectCharacters();
	selectObject();
	selectPlace();
}

function populate(){
	
	characters = data_characters.slice();
	objects = data_objects.slice();
	places = data_places.slice();

	genders = [
		{
			value:'male',
			label:'Masculin'
		},{
			value:'female',
			label: 'Féminin'
		}
	];
}

function parseCharacters(inputText){
	var lines = inputText.split('\n');
	var chars = [];
	for (var i = 0; i < lines.length; i++) {
	    var names = lines[i].split('/');
	    if(names[0]!=null && names[1]!=null)
	    	chars.push({maleName:names[0],femaleName:names[1] == null ? "" : names[1]});
	}
	return chars;
}

function parseObjectsOrPlaces(inputText){
	var array = inputText.split('\n');
	var newArray =[];
	for (var i = 0; i < array.length; i++) {
	    if(array[i]!="")
	    	newArray.push(array[i]);
	}
	return newArray;
}

function setTextAreas(){
	//populate();
	setCharactersTextArea();
	setObjectsTextArea();
	setPlacesTextArea();
}

function setCharactersTextArea(){
	characterTextArea = "";
	for(var i = 0; i < data_characters.length; i++){
		var c = data_characters[i];
		characterTextArea += c.maleName + '/' + c.femaleName + '\n';
	}
}

function setObjectsTextArea(){
	objectTextArea = "";
	for(var i = 0; i < data_objects.length; i++){
		objectTextArea += data_objects[i] + '\n';
	}
}

function setPlacesTextArea(){
	placeTextArea = "";
	for(var i = 0; i < data_places.length; i++){
		placeTextArea += data_places[i] + '\n';
	}
}

// ------------ User input ------------

function setFirstCharacterGender(gender){
	forcedFirstGender = gender != null ? gender.value : null;
}

function setFirstCharacter(character){
	forcedFirstCharacter = character;
}

function setSecondCharacterGender(gender){
	forcedSecondGender = gender != null ? gender.value : null;
}

function setSecondCharacter(character){
	forcedSecondCharacter = character;
}

function setObject(object){
	forcedObject = object;
}

function setPlace(place){
	forcedPlace = place;
}

function cheat(isChecked){
	if(isChecked)
		cheatEnabled = true;
	else
		cheatEnabled = false;
}
