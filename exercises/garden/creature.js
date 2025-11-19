

$("#add-creature").click(
    function () {

        // grab the value from the input
        let crName = $("#crName").val();
        let crColor= $("#crColor").val();
        let crEyesNum= $("#crEyesNum").val();
        let crEyesHTML="";
        let crTeethNum= $("#crTeethNum").val();
        let crTeethHTML="";

        for (let i = 0; i < crEyesNum ; i++){
            crEyesHTML=crEyesHTML + "<div class=eye>.</div>";
        }

         // generate teeth
         for (let i = 0; i < crTeethNum ; i++){
        crTeethHTML += "<div class='teeth'>_</div>";
        }


        // check for the field value do not add empty ones
        if ( (crName == "") || (crName.length>12) ) { // do nothing 
        }
        else {
            $("#creature-list").append(`
<div class="creature">
    <div class="creature-body" style="background: ${crColor}">${crEyesHTML} 
    ${crTeethHTML}</div>
    <div class="creature-info">${crName}</div>
</div>
`);
        }

        // remove the name after it's added
        $("#crName").val("");

    });

