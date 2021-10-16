/*
    instead of playing audio using index, we can also use 'this' keyword to access object and hence innerHTML
    as this.innerHTML which will be one of these ['w', 'a', 's', 'd', 'j', 'k', 'l']
    and we can use these to map audio to buttons
    
    setTimeout funtion takes a callBack functio and a time in ms
*/

let drumButtons = document.querySelectorAll(".drum");

for(let i = 0; i<drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        let buttonKey = this.innerHTML;
        makeSound(buttonKey);
        buttonAnimation(buttonKey);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    let dir = "res/audio/";
    switch(key) {
        case 'w':
            dir += "crash.mp3";
            break;
        case 'a':
            dir += "kick-bass.mp3";
            break;
        case 's':
            dir += "snare.mp3";
            break;
        case 'd':
            dir += "tom-1.mp3";
            break;
        case 'j':
            dir += "tom-2.mp3";
            break;
        case 'k':
            dir += "tom-3.mp3";
            break;
        case 'l':
            dir += "tom-4.mp3";
            break;
        default:
            console.log("no button found")
            break;
    }
    let currAudio = new Audio(dir)
    currAudio.play();
}

function buttonAnimation(key) {
    let currButton = document.querySelector("."+key);
    currButton.classList.add("pressed");
    setTimeout(function() {
        currButton.classList.remove("pressed");
    }, 50);
}