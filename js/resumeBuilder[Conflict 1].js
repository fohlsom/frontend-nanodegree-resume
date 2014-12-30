// var awesomeThoughts = "I am " + name + " and I am awesome.";
// var funThoughts = awesomeThoughts.replace("awesome", "fun");

// console.log(awesomeThoughts);

// var email = "fohlsson@google.com";
// var newEmail = email.replace("google", "gmail")

// console.log(email);
// console.log(newEmail);

// $("#main").append(awesomeThoughts);
// $("#main").append(funThoughts);
// $("#main").append(["Fredrik Ohlsson"]);


// var formattedName = HTMLheaderName.replace("%data%", "Fredrik Ohlsson");
// var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

var skills = ["python", "golf", "traveling"];

var bio = {
	"name" : "Fredrik Ohlsson",
	"role" : "Web Developer",
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


// $("#header").prepend(formattedRole);
$("#main").append(bio.name);
$("#main").append(bio.role);
// $("#header").prepend(formattedName);
// $("#header").prepend(bio.fullName);
// $("#header").append(bio.contactInformation);
// $("#header").append(bio.picURL);
// $("#header").append(bio.skills);

// var str = "audacity";
// var str2 = str.charAt(1).toUpperCase() + str.slice(2);

// var myArray = ["kalle", "hakan", "pollo"];

// console.log(myArray.length);






