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
	"jobs" : [
		{
			"employer": "Google Inc",
			"title": "Global Product Expert",
			"location": "Mountain View",
			"dates": "20140101",
			"description": "Work on sales tools."
		},
		{
			"employer": "Google Netherlands BV",
			"title": "Senior Industry Analyst",
			"location": "Amsterdam",
			"dates": "20120701",
			"description": "Sales and analysis."
		},
		{
			"employer": "Google Ireland Ltd",
			"title": "Inside Sales Representative",
			"location": "Dublin",
			"dates": "20091102",
			"description": "Sales and prospecting."
		}
	]
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

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	$(".work-entry:last").append(employer + " " + title);
	console.log(work.jobs[job].employer);
}

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
var myName = HTMLheaderName.replace("%data%", bio.name);
var myTitle = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(myName);
$("#header").append(myTitle);
$("#skillsChart").append(formattedSkill);






