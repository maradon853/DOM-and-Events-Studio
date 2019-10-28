// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    
let liftoff= document.getElementById("takeoff");
let status= document.getElementById("flightStatus");
let background= document.getElementById("shuttleBackground");
let height= document.getElementById("spaceShuttleHeight");
let landButton= document.getElementById("landing");
let abort= document.getElementById("missionAbort");
let up= document.getElementById("up");
let down= document.getElementById("down");
let right= document.getElementById("right");
let left= document.getElementById("left");
let rocketShip= document.getElementById("rocket");
let position = 0;
liftoff.addEventListener("click", function(){
  let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
  if (response){
    status.innerHTML="Shuttle in flight.";
    background.style.backgroundColor="blue";
    height.innerHTML=10000;
  }
});
landButton.addEventListener("click", function(){
    let response= window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML="The shuttle has landed.";
        background.style.backgroundColor="green";
        height.innerHTML=0;
});
abort.addEventListener("click", function(){
    let response = window.confirm("Confirm that you want to abort the mission.");
    if (response){
        status.innerHTML="Mission aborted.";
        background.style.backgroundColor="green";
        height.innerHTML=0;
    }
});
up.addEventListener("click", function(){
    height.innerHTML=10000;
    rocketShip.style.position = "relative";
    rocketShip.style.down += "10px";

});
down.addEventListener("click", function(){
    height.innerHTML=0;
    rocketShip.style.position = "relative";
    rocketShip.style.up = "10px";
});
right.addEventListener("click", function(){
    rocketShip.style.position = "relative";
    rocketShip.style.left += "10px";
    
});
left.addEventListener("click", function(){
    rocketShip.style.position = "relative";
    rocketShip.style.right += "10px";
});


});