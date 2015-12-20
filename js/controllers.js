var app = angular.module('website', ['ui.bootstrap']);

app.controller('Pictures', ['$scope', '$uibModal','modalService', function($scope, $uibModal, modalService){
	$scope.pics = [
		{
			"name": "Cialis Web Design",
			"imageFile": "cialis.jpg",
			"type": "web", 
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": "http://shatillaprayer.com/cialis/"
		},
		{
			"name": "The Blanks Web Design",
			"imageFile": "blanks.jpg",
			"type": "web",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": "http://shatillaprayer.com/cialis/"
		},
		{
			"name": "World Map Web App",
			"imageFile": "map.jpg",
			"type": "web",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": "http://courses.online.unlv.edu/courses/ENG231_RSabbath/#/"
		},
		{
			"name": "Blood Pressure Web App",
			"imageFile": "bp.jpg",
			"type": "web",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": "http://shatillaprayer.com/bloodpressure/"
		},
		{
			"name": "Genetics Web App",
			"imageFile": "genes.jpg",
			"type": "web",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": "http://shatillaprayer.com/cialis/"
		},
		{
			"name": "Study & Review Web App",
			"imageFile": "business.jpg",
			"type": "web",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": "http://shatillaprayer.com/cialis/"
		},
		{
			"name": "Heart Ideal Foods Logo",
			"imageFile": "logo1.jpg",
			"type": "graphic",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": ""
		},
		{ 
			"name": "LavaSource Tech Logo",
			"imageFile": "lavasource.jpg",
			"type": "graphic",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": ""
		},
		{
			"name": "Craig's Burgers Logo",
			"imageFile": "craigs.jpg",
			"type": "graphic",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": ""
		},
		{
			"name": "Craig's Burgers Ad",
			"imageFile": "gameon.jpg",
			"type": "print",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": ""
		},
		{
			"name": "Cox Mailer Ad",
			"imageFile": "cox.jpg",
			"type": "print",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": ""
		},
		{
			"name": "ZaZa Logo",
			"imageFile": "zaza.jpg",
			"type": "graphic","fullpic": "placeholder.jpg",
			"description": "information here",
			"link": ""
		},
		{
			"name": "Diamond Shark Slots",
			"imageFile": "slot.jpg",
			"type": "graphic",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": ""
		},
		{
			"name": "Tea Package Design",
			"imageFile": "teabox.jpg",
			"type": "print",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": ""
		}		
	];

// display pictures in a modal
$scope.getDataFromPictures = function(templateUrl, title, fullpic, description, link){
	modalService.openMenuModal('partials/ImageSize.html', title, fullpic, description, link);
};
	
   // determines the type of image.
	$scope.type = "all";
}]);