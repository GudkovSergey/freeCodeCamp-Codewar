// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    if(name[0] === "R" || name[0] === "r"){
      return name + " plays banjo"
    }else{
      return name + " does not play banjo"
    }
     
   }
   //-----------------------------------------------------------------------------------------------

/*Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]*/ 

function maps(x){
    const array = x.map(el => el*2);
    return array ; 
    }

    //-----------------------------------------------------------------------------------------------
    /*Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.*/
function century(year) {
    // Finish this :)
    return Math.floor(((year-1) /100)+1);
  }

