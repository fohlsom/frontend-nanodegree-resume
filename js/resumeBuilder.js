var bio = {
	"name" : "Fredrik Ohlsson",
	"role" : "Web Developa",
	"contact" : {
		"email" : "ohlsson.fredrik@gmail.com",
		"mobile" : "+1 415-425-6150",
		"github" : "fohlsom",
		"location" : "San Francisco" 
	},
	"welcomMessage" : "lorem ipsum dolor sit amet etc etc etc...",
	"skills": [
		"python", "golf", "traveling"
	],
	"bioPic" : "http://www.gravatar.com/avatar/8cb7a6c31eca402b7db2c33f7d763782.png",
}

var work = {
	"position" : "Global Product Expert",
	"tenure" : 5,
	"city" : "Mountain View"
}

var project = {
	"name" : "Golmap.co",
	"projectURL" : "golfmap.co",
	"description" : "Aggregate golf tee-times on a map with reviews."
}

var education = {
	"schools" : [
		{
			"name" : "Lunds University",
			"attended" : "2002 - 2003",
			"city" : "Lund"
		},
		{
			"name" : "Stockholm University",
			"attended" : "2001 - 2002, 2003 - 2005",
			"city" : "Stockholm"
		}		
	]
}

if (bio.name != null) {
	// $("#main").append(bio.name);
	$("#header").append(bio.name);
	} else {
		$("#main").append("Name missing");
	};
$("#main").append(bio.skills);
$("#main").append(bio.role);
$("#main").append(work["position"]);
$("#main").append(education.schools[1].name);
console.log(bio.skills.length);






