var bio = {
	"name" : "Fredrik Ohlsson",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "+1 415-XXX-XXXX",
		"email" : "email@gmail.com",
		"github" : "fohlsom",
		"twitter" : "fohlsom",
		"location" : "San Francisco, CA" 
	},
	"welcomeMessage" : "Welcome message, lorem ipsum dolor sit amet etc etc etc...",
	"skills": [
		"Remembering sports statistics",  "Web development", "Teaching golf"
	],
	"biopic" : "http://www.gravatar.com/avatar/8cb7a6c31eca402b7db2c33f7d763782.png",
	"display" : function() {
		var myName = HTMLheaderName.replace("%data%", bio.name);
		var myTitle = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(myName, myTitle, internationalizeButton);

		var myMobile = HTMLmobile.replace("%data%",bio.contacts["mobile"]);
		var myGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var myEmail = HTMLemail.replace("%data%",bio.contacts["email"]);
		var myLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		var bioPic = HTMLbioPic.replace("%data%",bio.biopic);
		var welcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#topContacts").append(myMobile, myGithub, myEmail, myLocation);
		$("#header").append(bioPic).append(welcomeMsg);
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
}

var education = {
	"schools" : [
		{
			"name" : "Lunds University",
			"location" : "Lund, Sweden",
			"degree" : "Bachelors Degree",
			"majors" : [
				"Business Law", "Statistics", "Informatics",
				],
			"dates" : 2003,
			"url" : "www.lu.se"
		},
		{
			"name" : "Stockholm University",
			"location" : "Stockholm, Sweden",
			"degree" : "Masters Degree",
			"majors" : [
				"Business","Economics","Finance"
				],
			"dates" : 2005,
			"url" : "www.su.se"
		}		
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "www.udacity.com"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "www.udacity.com"
		},
		{
			"title" : "HTML & CSS",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "www.udacity.com"
		}
	],
	"display" : function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var name = HTMLschoolName.replace("%data%", education.schools[school].name);
			var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var dates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var location = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			//var majors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			var majors = "";
			
			if (education.schools[school].majors.length > 0){
				for (var major in education.schools[school].majors) {
					majors += education.schools[school].majors[major] + ", ";
				};
			};
			var major = HTMLschoolMajor.replace("%data%", majors.slice(0,-2));
			
			$(".education-entry:last").append(name + degree, dates, location, major);
		};

		if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for (oc in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var ocTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[oc].title);
				var ocSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[oc].school);
				var ocDates = HTMLonlineDates.replace("%data%", education.onlineCourses[oc].date);
				var ocURL = HTMLonlineURL.replace("%data%", education.onlineCourses[oc].url);
				$(".education-entry:last").append(ocTitle + ocSchool, ocDates, ocURL);
			}
		}
	}
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
			"location": "Espoo, Finland",
			"dates": "2008 April - 2009 October",
			"description": "Service management."
		},
		{
			"employer": "Nissan Nordic Europe Oyj",
			"title": "Product Specialist",
			"location": "Helsinki, Finland",
			"dates": "2006 August - 2008 March",
			"description": "Service management."
		}
	],
	"display" : function() {
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
}

var projects = {
	"projects" : [
		{
			"title" : "Golfmap.co",
			"dates" : "2014 June",
			"projectURL" : "golfmap.co",
			"description" : "Golf map.",
			"images": [
				"http://placehold.it/140x100", "http://placehold.it/140x100"
			]
		},
		{
			"title" : "Golfpond.com",
			"dates" : "2013 January",
			"projectURL" : "golfpond.com",
			"description" : "Golf blog..",
			"images": [
				"http://placehold.it/140x100"
			]
		}
	],
	"display" : function() {
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
education.display();

//Google Map
$("#mapDiv").append(googleMap);
//Logs all clicks
$(document).click(function(loc) {
  console.log(loc.pageX + ", " + loc.pageY);

});











