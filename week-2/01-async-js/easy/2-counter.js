// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter=0;

function count(val){
  //  WHENEVER YOU WANT TO DO SOMETHING RELATED TO CALLBACK QUEUE TRY TO THINK IN TERMS OF RECURSION: RECURSIVE APPROACH
  // TRY TO DO IT WITHIN ASYNC FUNCTION
  setTimeout(()=>{
    console.log(val)
    val-=1
    count(val)
  },1000)
  
}


count(100)






// (Hint: setTimeout)