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
     console.log(solution('fdfdfh'));

   //---------------------------------------------------------------------------------------------------
     //Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
     function boolToWord( bool ){
      const result=  (bool === true? 'Yes': '')||(bool ===false? 'No':'');
     return result
     } 
   //----------------------------------------------------------------------------------------------------
   //A Needle in the Haystack
   function findNeedle(haystack) {

    let position = haystack.findIndex(i => i ==='needle');
    let element = haystack.find((el) => el === 'needle' )?"found the needle at position "  :'' 
    
     return element + position
    } 
    console.log(findNeedle(['wewe','sdsd','needle']));
   //-----------------------------------------------------------------------------------------------------
   //Rock Paper Scissors!
   
   const rps = (p1, p2) => {

    if (p1=== 'scissors'&& p2=== 'paper'){
            return "Player 1 won!"
          }else if(p1=== 'paper'&& p2=== 'scissors' ){
            return "Player 2 won!"
          }else if(p1=== 'scissors'&& p2=== 'rock'){
            return "Player 2 won!"
          }else if(p1=== 'rock'&& p2=== 'scissors'){
            return "Player 1 won!"
          }else if(p1=== 'paper'&& p2=== 'rock'){
            return "Player 1 won!"
          }else if(p1=== 'rock'&& p2=== 'paper'){
            return "Player 2 won!"
          }else{
            return "Draw!"
          }
        
          };
          
      console.log(rps('paper','rock'))
      //--------------------------------------------------------------------
      //bool
      function boolfunc(bolean){
        if(bolean===true){
          return "Yes!"}else{
            return "No!"
          }
        }
      console.log(boolfunc(false))
      //-----------------------------------------------------------------------
      //Return Negative
      function makeNegative(num) {
        if(num>0){
          return num*(-1)}else if(num<0){
            return num*1}else if(num === 0){
              return 0
            }
          }
        console.log(makeNegative(0))
        //---------------------------------------------------------------------
        //Find Maximum and Minimum Values of a List
        var max = function(list){
          
          return list.reduce((acc, number) => (number > acc ? number : acc),list[0])
      }
      console.log(max([1,2,5,8,9,70]))
      
      var min = function(list){
          
          return list.reduce((acc, number) => (number < acc ? number : acc),list[0])
      }
      console.log(min([1,2,5,8,9,70]))

      //---------------------------------------------------------------------------
      //Fake Binary
      function fakeBin(x){
        let xarr =x.split("");
        let newx =xarr.map(function(el){
         if(el<5){return el=0}else if(el>=5){return el=1}
        });
        const result = newx.join("")

        return result
        }
        console.log(fakeBin('15682436'))
        //--------------------------------------------------------------------------
        //Keep Hydrated!
        function litres(time) {
          let result = Math.floor(time*0.5)
          return result;
        }
        console.log(litres(10.2))
        //-------------------------------------------------------------------------
    //Disemvowel Trolls
    /*Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.*/


function disemvowel(str) {
  let strArr = str.split("");
  let result =strArr.map(el=>el.replace(/[aAeEiIoOuU]/g,''));
  let e= result.join("");
  return e;
}
console.log(disemvowel("ths wbst s fr lsrs LOL!"))