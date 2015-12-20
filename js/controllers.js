var app = angular.module('website', ['ui.bootstrap']);

app.controller('Pictures', ['$scope', '$uibModal','modalService', function($scope, $uibModal, modalService){
	$scope.pics = [
		{
			"name": "Cialis Web Design",
			"imageFile": "cialis.jpg",
			"type": "web"
		},
		{
			"name": "The Blanks Web Design",
			"imageFile": "blanks.jpg",
			"type": "web"
		},
		{
			"name": "World Map Web App",
			"imageFile": "map.jpg",
			"type": "web"
		},
		{
			"name": "Blood Pressure Web App",
			"imageFile": "bp.jpg",
			"type": "web"
		},
		{
			"name": "Genetics Web App",
			"imageFile": "genes.jpg",
			"type": "web"
		},
		{
			"name": "Study & Review Web App",
			"imageFile": "business.jpg",
			"type": "web"
		},
		{
			"name": "Heart Ideal Foods Logo",
			"imageFile": "logo1.jpg",
			"type": "graphic"
		},
		{ 
			"name": "LavaSource Tech Logo",
			"imageFile": "lavasource.jpg",
			"type": "graphic"
		},
		{
			"name": "Craig's Burgers Logo",
			"imageFile": "craigs.jpg",
			"type": "graphic"
		},
		{
			"name": "Craig's Burgers Ad",
			"imageFile": "gameon.jpg",
			"type": "print"
		},
		{
			"name": "Cox Mailer Ad",
			"imageFile": "cox.jpg",
			"type": "print"
		},
		{
			"name": "ZaZa Logo",
			"imageFile": "zaza.jpg",
			"type": "graphic"
		},
		{
			"name": "Diamond Shark Slots",
			"imageFile": "slot.jpg",
			"type": "graphic"
		},
		{
			"name": "Tea Package Design",
			"imageFile": "teabox.jpg",
			"type": "print"
		}		
	];

// display pictures in a modal
$scope.getDataFromPictures = function(templateUrl, title, fullpic, description){
	modalService.openMenuModal('partials/ImageSize.html', title, fullpic, description);
};
	
   // determines the type of image.
	$scope.type = "all";
}]);