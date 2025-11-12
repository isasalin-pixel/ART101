// a variable for strong names

//when the button is clicked (event)

$("#add-creature").click(
    function(){

        //grab the value from input
    let crName = $("#crName").val();

    //check the field value do not add empty ones
    if (crName=="") || (crName.length>12)
        {//do nothing }
    else {
         $("#creature-list").append(crName + ", ");
    }     


    //remove the name after it's added
    $("#crName").val("");

}});

//the magic move
//