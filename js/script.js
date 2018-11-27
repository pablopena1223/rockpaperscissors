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
    
    function getcomputerChoice(){
    var computerChoice = ["paper","rock","scissors"];
    var randomChoice = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomChoice];
    }
    
    var cc = getcomputerChoice()
    $("#computerChoice").text(cc);
    
 
    if (userChoice === "paper" && cc === "rock"){
        $('#result').text('User Wins')
    }
    if (userChoice === 'paper' && cc === 'paper'){
        $('#result').text('Tie, try again')
    }
    if (userChoice === 'paper' && cc === 'scissors'){
        $('#result').text('Computer Wins')
    }
    if (userChoice === 'scissors' && cc === 'rock'){
        $('#result').text('Computer Wins')
    }
    if (userChoice === 'scissors' && cc === 'paper'){
        $('#result').text('User Wins')
    }
    if (userChoice === 'scissors' && cc === 'scissors'){
        $('#result').text('Tie, try again')
    }
    if (userChoice === 'rock' && cc ==='rock'){
        $('#result').text('Tie, try again')
    }
    if (userChoice === 'rock' && cc ==='scissors'){
        $('#result').text('User Wins')
    }
    if (userChoice === 'rock' && cc ==='paper'){
        $('#result').text('Computer Wins')
    }

});

