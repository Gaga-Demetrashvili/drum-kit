
// Attaching eventListener to all buttons (using loop for looping through button array)


// Detecting Button Press 

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("Button")[i].addEventListener("click", handleClick);   
}

function handleClick() {

// Taking out html values for cases

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    
}

// Detecting Keyboard Press

document.addEventListener("keypress", function(event) {
   
// Taking key From Clicks. Key Means Letters (example: event = keyboardclick, event.key = "w", if w is clicked) 

    let eventKey = event.key;

    makeSound(eventKey);

    buttonAnimation(eventKey);

    
})


function makeSound(key) {

    switch (key) {
        case "w":
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();        
            break;
        case "a":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();        
            break;
        case "s":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();        
           break;
        case "d":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();        
           break;
        case "j":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();        
           break;
        case "k":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();        
           break;
        case "l":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();        
       break;
        
        default: console.log(buttonInnerHTML);
                       
    }

}


function buttonAnimation (currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");  
    setTimeout(function(){
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);
}  




// function removeAnimaton (e) {
//     document.querySelector("." + e).classList.remove("pressed");
// }


 