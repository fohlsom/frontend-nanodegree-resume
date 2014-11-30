var sampleArray = [0,0,10];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    newArray = _array;
    var lastElement = newArray.slice(-1);
    newArray.pop(-1);
    var newLastElement = parseInt(lastElement) + 1;
    newArray.push(newLastElement);

    // Don't delete this line!
    return newArray;

};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));