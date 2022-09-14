//'use strict';
/*
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = ' 🎉 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
*/

let   = Math.trunc(Math.random() * 20) + 1;

let scorre = 20;
let highscore = 0;

const   = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // document.querySelector('.message').textContent = '😒 No Number!';
    displaymsg('😒 No Number!');
  }
  //when player wins the game:--
  else if (guess === Secretnum) {
    // document.querySelector('.message').textContent = '😍 Correct Number';
    displaymsg('😍 Correct Number');
    document.querySelector('.number').textContent = Secretnum;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (scorre > highscore) {
      highscore = scorre;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== Secretnum) {
    if (scorre > 1) {
      // document.querySelector('.message').textContent =
      displaymsg(guess > Secretnum ? '🙄Too High!' : '😒Too Low!');
      scorre--;
      document.querySelector('.score').textContent = scorre;
    } else {
      // document.querySelector('.message').textContent = '😐 You lost the Game!';
      displaymsg('😐 You lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
    //   } else if (guess < Secretnum) {
    //     if (scorre > 1) {
    //       document.querySelector('.message').textContent = 'Too Low!';
    //       scorre--;
    //       document.querySelector('.score').textContent = scorre;
    //     } else {
    //       document.querySelector('.message').textContent = '😐 You lost the Game!';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //   }
  }
});

//PLAY AGAIN :-----------------
document.querySelector('.again').addEventListener('click', function () {
  scorre = 20;
  Secretnum = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Start Messaging...';
  displaymsg('Start Messaging...');
  document.querySelector('.score').textContent = scorre;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
