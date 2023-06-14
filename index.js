function runFiveMiles() {
    console.log("Go for a five-mile run") ;
  }

function liftWeights() {
    console.log("Pump iron");
}

function swimFortyLaps() {
    console.log("Pump iron"); 
  }

function exerciseRoutine(postrunactivity){
    console.log `${postrunactivity()}, ${postrunactivity()}`;
}

function Monday(){
    exerciseRoutine(swimFortyLaps,liftWeights);


}

console.log(Monday());


// ******************************************
function receivesAFunction(callback){
  callback();
}
function returnsANamedFunction(){
  return function namedfunction(){
    console.log("I am a function");
  };
}
function returnsAnAnonymousFunction(){
  return () => console.log("I am not a function");
}