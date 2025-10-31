var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];


   function makeImage () {

 if (colors[colorCount] == imageName) {
       $("body").append("<img width=50 src='images/" + imageName + ".png'>");
   }

   }
m
function changeBackground (newColor) {
    $("body").css("background-color", newColor);
}

$(".color-button").click( function () { 

    changeBackground(this.id);

});

function moody (moodyCount) {
    let mood = "";
    if (moodyCount <5 ) { mood = "super sleepy"; }
    else if ((moodyCount >= 5 ) && (moodyCount < 10 )) { mood = "keep pushing"}
    else mood = "so tired"; }



// the button part
$("#needy-button").click(function () {

//move the mood deciding code outside as a seperate function and then call it from here, anda use the result of the function for the button message
   let moodMesssage = moody(count);

   if (count < 5) { mood = "gresh and happy"; }
   else if ((count >= 5) && (count < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }
   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + mood);


   $("body").css("background-color", colors[colorCount]);


   changeBackground(colorCount);

makeImage("Orchid");
makeImage("Coral");
makeImage("Plum");

   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }
});