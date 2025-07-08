let scoreStr = localStorage.getItem('Score');
    let score;
    resetScore(scoreStr);
 
    
    function resetScore(scoreStr) {
    score = scoreStr ? JSON.parse(scoreStr) : {
      win: 0,
      lost: 0,
      tie: 0,
     };
  
      score.displayScore = function() {
        return `Won:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
      };

      showResult();
    }  

    function computerchoiceGenerator(){
      let randomNumber = Math.random() * 3;
      if (randomNumber >= 0 && randomNumber <= 1){
        return 'Bat';
      } else if (randomNumber > 1  && randomNumber <= 2){
        return 'Ball';
      } else {
      return 'Stumps';
      }
    };
      function getResult(userMove, computerMove) {
        if ( userMove === 'Bat') {
          if (computerMove === 'Ball') {
            score.win += 1;
            return 'User has won';
          } else if ( computerMove === 'Bat') {
            score.tie += 1;
            return `it's a tie`;
          } else if (computerMove === 'Stumps'){
            score.lost += 1;
            return 'Bot has won';
          }
        } else if ( userMove === 'Ball' ) {
          if (computerMove === 'Bat') {
            score.lost++;
            return 'Bot has won';
          } else if ( computerMove === 'Ball') {
            score.tie++;
            return `it's a tie`;
          } else if (computerMove === 'Stumps') {
            score.win++;
            return 'User has won';
          }
        } else if (userMove === 'Stumps') {
          if (computerMove === 'Bat') {
            score.win++;
            return 'User has won';
          } else if (computerMove === 'Ball'){
            score.lost++;
            return 'Bot has won'
          } else if (computerMove === 'Stumps') {
            score.tie++;
            return `it's a tie`
          }
        }
      };
      function showResult(userMove, computerMove, result) {
        localStorage.setItem('Score', JSON.stringify(score));
        
        document.querySelector('#user-move').innerText = userMove ? `You have chosen ${userMove}` : '';

        document.querySelector('#bot-move').innerText = computerMove ? `Bot has chosen ${computerMove}` : '';

        document.querySelector('#result').innerText = result || '';

        document.querySelector('#score').innerText = `Score : ${score.displayScore()}`;
      };