var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    space = oldName.indexOf(" ");
    lastName = finalName.slice(space + 1).toUpperCase();
    firstName = finalName.slice(0,1).toUpperCase() + finalName.slice(1,space).toLowerCase();
    finalName = firstName + " " + lastName;

    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));