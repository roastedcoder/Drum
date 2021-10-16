/*
    we are not calling handleClick()
    since function will get called while adding the function in eventListener
    which we don't want, we want to call the function when click happens

    so
    document.querySelector("button").addEventListener("click", handleClick()); will call the function while loading
    and
    document.querySelector("button").addEventListener("click", handleClick); will call the function on clicking the button

    also we can also use anonymous function since this will only be defined inside an eventListener
*/

let drumButtons = document.querySelectorAll(".drum");

for(let i = 0; i<drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        let dir = "res/audio/";
        switch(i) {
            case 3:
                dir += "tom-1.mp3";
                break;
            case 4:
                dir += "tom-2.mp3";
                break;
            case 5:
                dir += "tom-3.mp3";
                break;
            case 6:
                dir += "tom-4.mp3";
                break;
            case 1:
                dir += "kick-bass.mp3";
                break;
            case 0:
                dir += "crash.mp3";
                break;
            case 2:
                dir += "snare.mp3";
                break;
        }
        let currAudio = new Audio(dir)
        currAudio.play();
    });
}
