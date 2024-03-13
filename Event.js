
// Event is action that occur in web-Pages ,browser etce such as click ,buttun ,order now
// Two mainthing are come in it (i) Eventhandler (ii) Eventlistner
// To start the coding of it the we use the DOM with also Events


// Buttun Click Event;
// This below features & mehtod  of DOM is used to get the HTMl element

var myButtun = document.getElementById('myButtun');
myButtun.addEventListener("click" ,function(){
               alert("Buttun Clicked");
  });



// Mouse Over Eevent 
var mouseOverText = document.getElementById('mouseOverText');
mouseOverText.addEventListener(" mouseover" ,function(){
    mouseOverText.tetxtContent = 'You hovered Overe to me!';
});

//Input change Event 

var inputField = document.getElementById('inputField');
inputField.addEventListener("input", function(){
    console.log('Input Field ', inputField.value)
});


// Double Click Event 

var doubleClickText = document.getElementById('doubleClickText');
doubleClickText.addEventListener("dbClick" , function(){
    doubleClickText.textContent = 'Double-Clicked to me!';
});
// Key Press Event 

var keyPressInput = document.getElementById('keyPressInput');
keyPressInput = addEventListener('keypress', function(event){
    console.log('Key Pressed ' , event.key) ;
});



// // Below is the same code;

// // Button Click Event
// var button = document.getElementById('myButton');
// button.addEventListener('click', function() {
//     alert('Button clicked!');
// });

// // Mouse Over Event
// var mouseOverText = document.getElementById('mouseOverText');
// mouseOverText.addEventListener('mouseover', function() {
//     mouseOverText.textContent = 'You hovered over me!';
// });

// // Input Change Event
// var inputField = document.getElementById('inputField');
// inputField.addEventListener('input', function() {
//     console.log('Input changed:', inputField.value);
// });

// // Double Click Event
// var doubleClickText = document.getElementById('doubleClickText');
// doubleClickText.addEventListener('dblclick', function() {
//     doubleClickText.textContent = 'Double clicked!';
// });

// // Key Press Event
// var keyPressInput = document.getElementById('keyPressInput');
// keyPressInput.addEventListener('keypress', function(event) {
//     console.log('Key pressed:', event.key);
// });

