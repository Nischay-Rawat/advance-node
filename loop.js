//node myFile.js
const pendingTimers = [];
const pendingOSTasks =[]
const pendingOperations= []
myFile.runContents();
//entire body executes in one 'tick'
function shouldContinue(){
// Check one: Any pending setTimeout, SetInterval, setImmediate?
// then  our program doesn't exit . It continues running for another tick
// Check two: Any pending OS tasks? (Like server listening to port) 
// A second check that if there are any pending operating system tasks
//Check three : Any pending long running operations? (Like fs module)
 return pendingTimers.length||pendingOSTasks.length||pendingOperations.length;
}
while(shouldContinue()){

}

//exit back to terminal