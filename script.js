'use stric';

const player0El = document.querySelector('.player--0');
const player1El =document.querySelector('.player--1');
const score0El = document.querySelector('player--0');
const score1El = document.getElementById('player--1');
const current0El = document.getElementById('player--0');
const current1El = document.getElementById('player--1');

const diceEl =querySelector('.dice');
const  btnNew = querySelector( '.btn--new');
const  btnRoll =querySelector('.btn--roll');
const btnHold = querySelector('.btn--hold');


let score,currentScore,activePlayer ,playing;

// starting condition;

const init = function() {
  score = [0,0];
  currentScore =0;
  activePlayer =0;
  playing  = true;

  score0El.textContent=0;
  score1El.textContent =0;
  current0El.textContent= 0;
  current1El.textContent =0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
      
                             };
init();

const switchPlayer = function(){
  document.getElementById(`current --${activePlayer}`).textContent =0;
currentScore = 0;
activePlayer = 0;
activePlayer === 0 ? 1:0;
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
      
};

//Rolling  dice Functionality ;

btnRoll.addEventlistener('click' ,function (){
   if(playing){

   // 1- generating a random dice roll 

    const dice = Math.trunc(Math.random()*6) +1;

    //Displaying the Dice ;
    diceEl.classList.remove('hidden');
    diceEl.src = `diec -${dice}.png`;


  //Checking for Roller 1 ;
  if(dice !== 1){
     
      //add dice to the current score 
 currentScore += dice ;
  document.getElementById(
    `current --${activePlayer}`
    )
  .textContent = currentScore;
   } else  {
       //switch to nextPlayer ;
       switchPlayer()
  }
 }
});


btnHold.addEventlistener('click' ,function (){
   if(playing){

   // 1- Add  Current score to the active player's score;

    score [activePlayer] +=currentScore 

    //score[1] = score[1] +currentScore;

document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    //2- Checking if the playerScore is>=100;

    if( score[activePlayer] >=100){

      //Finishing the game 
      playing = false ;
      diceEl.classList.remove('hidden');

      document
      .querySelector(`.player--${activePlayer}`);
         classList.add('player--winner')

      document
      .querySelector(`.player--${activePlayer}`);
          classList.remove('player--active')
          
        } else{
              //switch to nextPlayer;
            switchPlayer();
        }
      }

   })

   btnNew.addEventlistener('click' ,init);
















































