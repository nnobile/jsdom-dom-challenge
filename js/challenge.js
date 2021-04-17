// 1. As a user, I should see the timer increment every second once the page has loaded.

const timer = document.getElementById("counter");
const heartButton = document.getElementById("heart");
const numberLikes = document.querySelector('.likes');
const likedNumbers = {};
let paused = false;

function incrementTimer(){
    if (!paused){
        let newTimer = parseInt(timer.innerText)
        newTimer += 1
        timer.innerText = newTimer
    }
}

function decrementTimer(){
    let newTimer = parseInt(timer.innerText)
    newTimer -= 1
    timer.innerText = newTimer
}

function automaticallyIncrement(){
    setInterval(incrementTimer, 1000)
}

//automaticallyIncrement()

//2. As a user, I can manually increment and decrement the counter using the plus and minus buttons.

function manuallyIncrement(){
    const plusButton = document.querySelector('#plus')
    plusButton.addEventListener('click', incrementTimer)
}

function manuallyDecrement(){
    const minusButton = document.querySelector('#minus')
    minusButton.addEventListener('click', decrementTimer)
}

manuallyIncrement()
manuallyDecrement()

// 3. As a user, I can 'like' an individual number of the counter. I should see the count of the number of 'likes' associated with that number displayed.

heartButton.addEventListener('click', likeNumber)

function likeNumber(){
    //"Actual number has been liked X times"
    const currentNumber = timer.innerText;
    console.log("Liking number")
    if (likedNumbers[currentNumber]){
        likedNumbers[currentNumber] += 1;
        document.getElementById(currentNumber).innerText = `${currentNumber} has been liked ${likedNumbers[timer.innerText]} times`;
    } else {
        likedNumbers[currentNumber] = 1;
        numberLikes.innerHTML += `<li id=${currentNumber}> ${currentNumber} 
        has been liked ${likedNumbers[timer.innerText]} times </li>`;
    }

}
 // 4 As a user, I can pause the counter, which should:
 // pause the counter
 // disable all buttons except the pause button
 // switch the label on the button from "pause" to "resume"

 const pauseButton = document.getElementById("pause")
 pauseButton.addEventListener('click', togglePause)

 function togglePause(){
     console.log("Paused")
     paused = !paused
 }

 //pauseButton.innerText = "resume"