const score=JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  lost:0,
  ties:0
};
/*if(!score){
score = {
  wins:0,
  lost:0,
  ties:0
};
}*/

updateScore();


function playGame(playerMove)
{
const computerMove = pickComputerNum();

let result='';
if(playerMove==='Rock')
{
  if(computerMove==='Rock')
  {
    result='Tie.';
  }
  else if(computerMove==='Paper'){
    result='You Lost.';
  }
  else if (computerMove==='Scissors'){
    result='You Win.';
  }

}

else if(playerMove==='Paper')
{
  if(computerMove==='Rock')
  {
    result='You Win.';
  }
  else if(computerMove==='Paper')
  {

  result='Tie';
  }
  else if(computerMove==='Scissors')
  {
  result='You Lost.';

  }
}

else if (playerMove==='Scissors')
{
  if(computerMove==='Rock')
  {
    result='You Lost.';

  }
  if(computerMove==='Paper')
  {
    result='You Win.';

  }
  if(computerMove==='Scissors')
  {
    result='Tie.';

  }
}

if(result==='You Win.'){
  score.wins+=1;

}
else if(result==='You Lost.'){
  score.lost+=1;

}
else if(result==='Tie.'){
  score.ties+=1;

}
updateScore();

document.querySelector('.js-result').innerHTML =result;
document.querySelector('.js-moves').innerHTML = `
You
<img class="move-icon" src="images/${playerMove}-emoji.png">
<img class="move-icon" src="images/${computerMove}-emoji.png"> 
Computer`;


}
function updateScore(){
localStorage.setItem('score',JSON.stringify(score));
document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, lose: ${score.lost}, ties: ${score.ties}`;

}



let computerMove='';
function pickComputerNum()
{
const randomNumber=Math.random();

if(randomNumber>=0 && randomNumber<1/3)
{
  computerMove='Rock';

}
else if(randomNumber>=1/3 && randomNumber<2/3)
{
  computerMove='Paper';

}
else if(randomNumber>=2/3 && randomNumber<1)
{
  computerMove='Scissors';

}

return computerMove;


}