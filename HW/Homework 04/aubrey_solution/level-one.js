/* * DOTS: Level One * */

let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

/* * Add 10 points every time the dot is clicked. When score exceeds 100, declare winner and prompt user to go to next level. * */

ballEl.addEventListener('click', function() {
  score += 10;

  if ( score <= 100 ) {
    scoreEl.innerText = score;
  } else {
    declareWinner();
  }
});

function declareWinner() {
  document.body.classList.add('game-over');
}