// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var userChoice = ""; 
var computerChoice = "";
var winner = ""; 

$("#shoot").click(function(){
    
var randomNumber = Math.random();

     userChoice = $("#input").val();
    $("#userchoice").text(userChoice);

    
if(randomNumber > 0 && randomNumber < .33) {
        $("#text").html("rock"); 
        computerChoice = "rock"
    } else if(randomNumber > .33 && randomNumber < .66){
        $("#text").html("paper");
        computerChoice = "paper"
    } else if(randomNumber > .66 && randomNumber < 1){
        $("#text").html("sissors");
        computerChoice = "sissors"
    }
    
    $("#computerChoice").text(computerChoice);
      
});
// DOCUMENT READY FUNCTION BELOW

