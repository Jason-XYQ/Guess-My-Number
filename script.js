'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '๐Correct Number!';

let secrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    displayMessage('โ No Number!');
    // document.querySelector('.message').textContent = 'โ No Number!';

    //When player wins
  } else if (guess === secrectNumber) {
    displayMessage('๐ Correct Number!');
    // document.querySelector('.message').textContent = '๐ Correct Number!';
    document.querySelector('.number').textContent = secrectNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    //ไฟๆๆ้ซๅ่ฎฐๅฝ
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // dry principle
  } else if (guess !== secrectNumber) {
    if (score > 1) {
      displayMessage(guess > secrectNumber ? '๐ Too high!' : '๐ Too low!');
      // document.querySelector('.message').textContent =
      //   guess > score ? '๐ Too high!' : '๐ Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //ๅฆๅๆธธๆๅคฑ่ดฅ
      displayMessage('๐ฅ You lost the game!');
      // document.querySelector('.message').textContent = '๐ฅ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when guess is wrong
  //When guess is too high
  // else if (guess > secrectNumber) {
  //   //ๅๆฐไธ่ฝไฝไบ0
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '๐ Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     //ๅฆๅๆธธๆๅคฑ่ดฅ
  //     document.querySelector('.message').textContent = '๐ฅ You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //When guess is too low
  // } else if (guess < secrectNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '๐ Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '๐ฅ You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secrectNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;

  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
  // ๆธ็ฉบ่พๅฅๆก
  document.querySelector('.guess').value = '';
});
