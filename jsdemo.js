


function changeBackground(){

  document.getElementById("but2").style.backgroundColor = "red";
}



var button3 = document.getElementById("but4");
  
button3.addEventListener("click", function() {

    document.body.style.backgroundColor = 'powderblue';
  });

  var button4 = document.getElementById("but4");
  button4.addEventListener("mouseover", function() {

    document.getElementById("toph3").style.color = "red";
  });

    button4.addEventListener("mouseout", function() {

    document.getElementById("toph3").style.color = "black";
  });


// Define a new event.
var SpecialEvent = new CustomEvent(
  "SpecialMessage",
  {
   detail:
   {
     message: "Hello There",
     time: new Date()
   },
   bubbles: true,
   cancelable: true
  });
  
  function AssignEvent() {

  // Obtain the object reference.
  var Label = document.getElementById("CustomLabel");
  // Assign an event to the object.
  Label.addEventListener(
   "SpecialMessage", HandleEvent, false);
}

function FireEvent() {
  // Obtain the object reference.
  var Label = document.getElementById("CustomLabel");
  // Fire the event.
  Label.dispatchEvent(SpecialEvent);
}

function HandleEvent(event) {
  // Display the event information.
  document.getElementById("CustomLabel").innerHTML =
   "Control:" + event.currentTarget.id +
   "<br />Message: " + event.detail.message +
   "<br />Time sent: " +
   event.detail.time.toTimeString();
}

document.getElementById("but3").onclick = function() {alert("working")};

FireEvent();
HandleEvent(SpecialEvent);

