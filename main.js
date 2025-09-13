//pseudo code

 //when clicking button 5 coins are taking from remaining coins
 //update the remaing coins
 //make slot machine spin after taking the coins
 //if three images are matching add 25 coins to remaining coins
 //if not matching display you loose
 //if remaining coins are less than 5 display not enough coins
 //same for big button but 50 coins are taken and 100 coins are added for matching
 //if remaining coins are les than 50 coins display not enough coins
 //if coins are 0 disable both buttons 
 //add sound effects for both buttons and wining
 //add a reset button to reset the game 

let sen = document.querySelector(".sen")

let reelIt = [
    "<img src='cherry.png'>",
    "<img src='lemon.png'>",
    "<img src='water.png'>",
    "<img src='1.png'>",
    "<img src='2.png'>",
    "<img src='3.png'>",
    "<img src='4.png'>",
    "<img src='5.png'>",
    "<img src='6.png'>",
    "<img src='7.png'>"
]

let reel1 = document.querySelector(".reel1")
let reel2 = document.querySelector(".reel2")
let reel3 = document.querySelector(".reel3")

let coins = document.querySelector(".coins")
coins.innerText = 1000

document.querySelector(".small").addEventListener("click", smallSpin)
document.querySelector(".big").addEventListener("click", bigSpin)

function smallSpin() {
    if (coins.innerText >= 5) {
        coins.innerText = Number(coins.innerText) - 5

        reel1.innerHTML = reelIt[Math.floor(Math.random() * reelIt.length)]
        reel2.innerHTML = reelIt[Math.floor(Math.random() * reelIt.length)]
        reel3.innerHTML = reelIt[Math.floor(Math.random() * reelIt.length)]

        if (reel1.innerHTML === reel2.innerHTML && reel2.innerHTML === reel3.innerHTML) {
            sen.innerText = "You Winnnnnn!"
            coins.innerText = Number(coins.innerText) + 25
        }
        else {
            sen.innerText = "You loose"
        }
    }
    else {
        document.querySelector("h2").innerText = "out of coins"
    }
}

function bigSpin() {
    if (coins.innerText >= 50) {
        coins.innerText = Number(coins.innerText) - 50

        reel1.innerHTML = reelIt[Math.floor(Math.random() * reelIt.length)]
        reel2.innerHTML = reelIt[Math.floor(Math.random() * reelIt.length)]
        reel3.innerHTML = reelIt[Math.floor(Math.random() * reelIt.length)]

        if (reel1.innerHTML === reel2.innerHTML && reel2.innerHTML === reel3.innerHTML) {
            sen.innerText = "You Winnnnnnn!"
            coins.innerText = Number(coins.innerText) + 100
        }
        else {
            sen.innerText = "You loose!"
        }
    }
    else {
        document.querySelector("h2").innerText = "out of coins"
    }
}
// function playWinSound() {
//   // Create a new Audio object with the URL of the sound file.
//   // Replace this URL with the direct link to your winning slot sound.
//   const winSound = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

//   // Play the sound.
//   winSound.play().then(() => {
//     console.log('Winning sound effect started.');
//   }).catch(error => {
//     console.error('Error playing sound:', error);
//   });
// }


