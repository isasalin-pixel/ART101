
// declaring an array with name myCommutes
let myCommutes = ["motorcycle", "UCSC bus", "train", "tricycle", "McClaren", "walking"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Motorcycle",
    route: 10,
    print: "chrome",
    hasMiddleDoor: false,
    drivers: ["Max Verstappen", "king shark", "random man from the park"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[4] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";

$("#output").html(megaSentence);
 