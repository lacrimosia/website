var app = angular.module('website', ['ui.bootstrap']);

app.controller('Pictures', ['$scope', '$uibModal','modalService', function($scope, $uibModal, modalService){
	$scope.pics = [
		{
			"name": "Cialis Web Design",
			"imageFile": "cialis.jpg",
			"type": "web",
			"fullpic": "cialis.jpg",
			"description": "This was an assignment for my research class. Basically, I designed a website that was easy for elderly adults to use. I researched ideas and that information led to the design of this website.",
			"link": "http://shatillaprayer.com/cialis/",
			"download": "https://github.com/lacrimosia/Cialis_website",
			"tech": [
				{
					"name": "HTML5",
					"image": "html5.png"
				},
				{
					"name": "CSS3",
					"image": "css3.png"
				},
				{
					"name": "JavaScript",
					"image": "javascript.png"
				},
				{
					"name": "jQuery",
					"image": "jquery.png"
				},
				{
					"name": "PHP",
					"image": "php.png"
				}
			]
		},
		{
			"name": "The Blanks Web Design",
			"imageFile": "blanks.jpg",
			"type": "web",
			"fullpic": "blanks.jpg",
			"description": "I created this website for my final project in my Corporate Branding class. I was working with a team and I decided to create a band website that would promote their events. The site also has online store page where fans would purchase band merchandise.",
			"link": "http://shatillaprayer.com/blanks/",
			"download": "https://github.com/lacrimosia/Band_Website.git",
			"tech": [
				{
					"name": "HTML5",
					"image": "html5.png"
				},
				{
					"name": "CSS3",
					"image": "css3.png"
				},
				{
					"name": "JavaScript",
					"image": "javascript.png"
				}
			]
		},
		{
			"name": "World Map Web App",
			"imageFile": "map.jpg",
			"type": "web",
			"fullpic": "map.jpg",
			"description": "information here",
			"link": "http://guides.library.unlv.edu/eng231",
			"tech": [
				{
					"name": "HTML5",
					"image": "html5.png"
				},
				{
					"name": "CSS3",
					"image": "css3.png"
				},
				{
					"name": "JavaScript",
					"image": "javascript.png"
				},
				{
					"name": "Angular JS",
					"image": "angular.png"
				}
			]
		},
		{
			"name": "Blood Pressure Web App",
			"imageFile": "bp.jpg",
			"type": "web",
			"fullpic": "bloodpressure.jpg",
			"description": "information here",
			"link": "http://shatillaprayer.com/bloodpressure/",
			"tech": [
				{
					"name": "HTML5",
					"image": "html5.png"
				},
				{
					"name": "CSS3",
					"image": "css3.png"
				},
				{
					"name": "JavaScript",
					"image": "javascript.png"
				},
				{
					"name": "jQuery",
					"image": "jquery.png"
				}
			]
		},
		{
			"name": "Genetics Web App",
			"imageFile": "genes.jpg",
			"type": "web",
			"fullpic": "monster.jpg",
			"description": "information here",
			"link": "http://shatillaprayer.com/frankenstein_lab/",
			"tech": [
				{
					"name": "HTML5",
					"image": "html5.png"
				},
				{
					"name": "CSS3",
					"image": "css3.png"
				},
				{
					"name": "JavaScript",
					"image": "javascript.png"
				},
				{
					"name": "Angular",
					"image": "angular.png"
				}
			]
		},
		{
			"name": "Study & Review Web App",
			"imageFile": "business.jpg",
			"type": "web",
			"fullpic": "review.jpg",
			"description": "information here",
			"link": "http://shatillaprayer.com/flash_cards/",
			"tech": [
				{
					"name": "HTML5",
					"image": "html5.png"
				},
				{
					"name": "CSS3",
					"image": "css3.png"
				},
				{
					"name": "JavaScript",
					"image": "javascript.png"
				},
				{
					"name": "Angular",
					"image": "angular.png"
				}
			]
		},
		{
			"name": "Heart Ideal Foods Logo",
			"imageFile": "logo1.jpg",
			"type": "graphic",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": "",
			"tech": [
				{
					"name": "Illustrator",
					"image": "illustrator.png"
				}
			]
		},
		{
			"name": "LavaSource Tech Logo",
			"imageFile": "lavasource.jpg",
			"type": "graphic",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": "",
			"tech": [
				{
					"name": "Illustrator",
					"image": "illustrator.png"
				}
			]
		},
		{
			"name": "Craig's Burgers Logo",
			"imageFile": "craigs.jpg",
			"type": "graphic",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": "",
			"tech": [
				{
					"name": "Illustrator",
					"image": "illustrator.png"
				}
			]
		},
		{
			"name": "Craig's Burgers Ad",
			"imageFile": "gameon.jpg",
			"type": "print",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": "",
			"tech": [
				{
					"name": "Illustrator",
					"image": "illustrator.png"
				},
				{
					"name": "Photoshop",
					"image": "photoshop.png"
				},
				{
					"name": "InDesign",
					"image": "indesign.png"
				}
			]
		},
		{
			"name": "Cox Mailer Ad",
			"imageFile": "cox.jpg",
			"type": "print",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": "",
			"tech": [
				{
					"name": "Illustrator",
					"image": "illustrator.png"
				},
				{
					"name": "Photoshop",
					"image": "photoshop.png"
				},
				{
					"name": "InDesign",
					"image": "indesign.png"
				}
			]
		},
		{
			"name": "ZaZa Logo",
			"imageFile": "zaza.jpg",
			"type": "graphic","fullpic": "placeholder.jpg",
			"description": "information here",
			"link": "",
			"tech": [
				{
					"name": "Illustrator",
					"image": "illustrator.png"
				}
			]
		},
		{
			"name": "Diamond Shark Slots",
			"imageFile": "slot.jpg",
			"type": "graphic",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": "",
			"tech": [
				{
					"name": "Illustrator",
					"image": "illustrator.png"
				},
				{
					"name": "Photoshop",
					"image": "photoshop.png"
				}
			]
		},
		{
			"name": "Tea Package Design",
			"imageFile": "teabox.jpg",
			"type": "print",
			"fullpic": "placeholder.jpg",
			"description": "information here",
			"link": "",
			"tech": [
				{
					"name": "Illustrator",
					"image": "illustrator.png"
				},
				{
					"name": "Photoshop",
					"image": "photoshop.png"
				}
			]
		}
	];

// display pictures in a modal
$scope.getDataFromPictures = function(templateUrl, title, fullpic, description, link, download, tech){
	modalService.openMenuModal('partials/ImageSize.html', title, fullpic, description, link, download, tech);
};

   // determines the type of image.
	$scope.type = "all";
}]);
