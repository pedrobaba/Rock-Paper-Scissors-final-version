  let score = JSON.parse(localStorage.getItem('score')) ||  {
        wins: 0,
        losses: 0, 
        ties: 0,
      };;


    
    /*
    if(!score){
      score = {
        wins: 0,
        losses: 0, 
        ties: 0,
      };
    } */
      let isAutoPlay = false;
      let intervalId;

      function autoPlay(){
        if(!isAutoPlay){
        intervalId = setInterval(() => {
          const playerMove = pickcomputerMove();
          playGame(playerMove);
      }, 1000);
          isAutoPlay = true;

        } else{
          clearInterval(intervalId);
          isAutoPlay = false;
        };

        
      };

    updateScoreElement();


    function playGame(playerMove) {
      const computerMove = pickcomputerMove();

      let result = '';

      
      if(playerMove === 'Scissors'){
          if (computerMove === 'Rock'){
          result = 'You lose.';
          }else if (computerMove ===  'Paper'){
          result = 'You win.';
          } else if (computerMove === 'Scissors'){
          result = 'Tie.';
          };

      } else if (playerMove === 'Paper'){
          if (computerMove === 'Rock'){
          result = 'You win.';
          }else if (computerMove === 'Paper'){
          result = 'Tie.';
          } else if (computerMove === 'Scissors'){
          result = 'You lose.';
          };

      } else if(playerMove === 'Rock'){
          if (computerMove === 'Rock'){
          result = 'Tie.';
          }else if (computerMove === 'Paper'){
          result = 'You lose.';
          } else if (computerMove === 'Scissors'){
          result = 'You win.';
          };
      };
      
      if (result === 'You win.'){
       score.wins++;
      }else if(result === 'You lose.'){
        score.losses++;
      }else if (result === 'Tie.'){
        score.ties++;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();
//  console.log(score);

    document.querySelector('.js-results').innerHTML = result; 

    document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icons">
  <img src="images/${computerMove}-emoji.png" class="move-icons"> Computer`;

    // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
    // Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.ties}`);
    };


    function updateScoreElement(){
      document.querySelector('.js-score').  innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    };

   function pickcomputerMove(){
     const randomNumber = Math.random();

      let computerMove = '';

      if(randomNumber >= 0 && randomNumber <= 1/3){
        computerMove = 'Rock';
      }else if(randomNumber >= 1/3 && randomNumber <= 2/3){
        computerMove = 'Paper';
      } else if (randomNumber >= 2/3 && randomNumber < 1){
      computerMove = 'Scissors';
      };

      return computerMove;
   };