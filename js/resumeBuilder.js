var bio = {
	"name" : "Fredrik Ohlsson",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "ohlsson.fredrik@gmail.com",
		"mobile" : "+1 415-425-6150",
		"github" : "fohlsom",
		"location" : "San Francisco, CA" 
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
			"location": "Mountain View, CA",
			"dates": "2014 January - Present",
			"description": "Work on sales tools."
		},
		{
			"employer": "Google Netherlands BV",
			"title": "Senior Industry Analyst",
			"location": "Amsterdam, The Netherlands",
			"dates": "2011 July - 2013 December",
			"description": "Sales and analysis."
		},
		{
			"employer": "Google Ireland Ltd",
			"title": "Inside Sales Representative",
			"location": "Dublin, Ireland",
			"dates": "2009 November - 2011 June",
			"description": "Sales and prospecting."
		},
		{
			"employer": "Basware Oyj",
			"title": "Service Manager",
			"location": "Helsinki, Finland",
			"dates": "2008 March - 2009 October",
			"description": "Service management."
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Golfmap.co",
			"dates" : "2014 June",
			"projectURL" : "golfmap.co",
			"description" : "Aggregate golf tee-times on a map with reviews.",
			"images": [
				"http://placehold.it/140x100", "http://placehold.it/140x100"
			]
		},
		{
			"title" : "Golfpond.com",
			"dates" : "2013 January",
			"projectURL" : "golfpond.com",
			"description" : "Reviews of golf courses and a blog..",
			"images": [
				"http://placehold.it/140x100"
			]
		}

	]
}

var education = {
	"schools" : [
		{
			"name" : "Lunds University",
			"attended" : "2002 - 2003",
			"city" : "Lund",
			"location" : "Lund, Sweden"
		},
		{
			"name" : "Stockholm University",
			"attended" : "2001 - 2002, 2003 - 2005",
			"city" : "Stockholm",
			"location" : "Stockholm, Sweden"
		}		
	]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var dates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var desc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		
		$(".project-entry:last").append(title, dates, desc);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var image = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(image);
			}
		}
	}
}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var employerTitle = employer + " " + title;
		var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var desc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(employerTitle, dates, desc);
	}	
}

bio.display = function() {
	var myName = HTMLheaderName.replace("%data%", bio.name);
	var myTitle = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(myName, myTitle, internationalizeButton);
	var myMobile = HTMLmobile.replace("%data%",bio.contacts["mobile"]);
	var myGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var myEmail = HTMLemail.replace("%data%",bio.contacts["email"]);
	var myLocation = HTMLlocation.replace("%data%",bio.contacts.location);

	$("#footerContacts").append(myMobile, myGithub, myEmail, myLocation);

	// Header - Skills section
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var mySkills = HTMLskills.replace("%data%", bio.skills[0]);
		$("#header").append(mySkills);
		var mySkills = HTMLskills.replace("%data%", bio.skills[1]);
		$("#header").append(mySkills);
		var mySkills = HTMLskills.replace("%data%", bio.skills[2]);
		$("#header").append(mySkills);
	}
}

//Internationalize button
function inName(name) {
	name = name.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0] + " " + name[1];
	console.log(name[0] + " " + name[1]);
}

bio.display();
work.display();
projects.display();

//Google Map
$("#mapDiv").append(googleMap);
//Logs all clicks
$(document).click(function(loc) {
  console.log(loc.pageX + ", " + loc.pageY);

});











