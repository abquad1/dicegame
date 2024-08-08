'use strict';

let currentPlayer = 0, currentScore = 0 , scores= [0,0], playing


const diceRoll =()=>{

  if (playing= true) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    const randomDiceSrc = "./image/" + "dice-" + randomNumber + ".png";

    document.getElementById('dice').style.display = "block"
    document.getElementById('dice').setAttribute('src', randomDiceSrc)
    
    console.log(randomNumber)


    if (randomNumber !== 1) {
      currentScore += randomNumber
      document.getElementById('current--' + currentPlayer).innerHTML = currentScore
    } else{
      switchPlayer()
    }
  }

  
}

  const switchPlayer = () =>{
    document.getElementById('current--' + currentPlayer).innerHTML = "0"
    currentScore = 0

    if (currentPlayer === 0) {
      currentPlayer = 1
    } else {
      currentPlayer = 0
    }

    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')
  }

  const diceHold = ()=>{
    if (playing = true) {
      scores[currentPlayer] += currentScore
    document.getElementById('score--' + currentPlayer).innerHTML = scores[currentPlayer];

      if ( scores >= 100) {
    document.getElementById('dice').style.display = "none"
    playing = false
    document.querySelector('.player--' + currentPlayer).classList.add('player--winner')
    document.querySelector('.player--' + currentPlayer).classList.remove('player--active')
        
      } else {
        switchPlayer()
      }
    
    }
  }

const newGame = () =>{
currentScore = 0
scores = [0,0]

document.getElementById('dice').style.display = "none"
  document.getElementById('score--0').innerHTML = '0';
  document.getElementById('score--1').innerHTML = '0';
  document.getElementById('current--0').innerHTML = '0';
  document.getElementById('current--1').innerHTML = '0';
  
  document.querySelector('.player--0').classList.remove('player--winner')
  document.querySelector('.player--1').classList.remove('player--winner')
  document.querySelector('.player--0').classList.add('player--active')
  document.querySelector('.player--0').classList.remove('player--active')
  playing = true

}  

newGame()