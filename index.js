/*
    we are not calling handleClick()
    since function will get called while adding the function in eventListener
    which we don't want, we want to call the function when click happens

    so
    document.querySelector("button").addEventListener("click", handleClick()); will call the function while loading
    and
    document.querySelector("button").addEventListener("click", handleClick); will call the function on clicking the button
*/
document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    alert("I got clicked!");
}