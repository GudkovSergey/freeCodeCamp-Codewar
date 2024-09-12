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

//-----------------------------------------------------------------------------------------------
//Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
    const square = numbers.map(el=> el*el);
    return square.reduce((total,current)=> {
    return total+current},0);
      return result;
      
    }
    //-----------------------------------------------------------------------------------------------
    //Complete the solution so that it reverses the string passed into it.

    function solution(str){
      const arrStr = str.split("");
       
     const reversStr= arrStr.reverse();
      const result= reversStr.join("");
       return result;
       
     }
     