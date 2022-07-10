let player1score= document.querySelector('#player1score');
let player2score= document.querySelector('#player2score');
let inc1score= document.querySelector('#inc1score');
let inc2score= document.querySelector('#inc2score');
let reset= document.querySelector('#reset');
let winningScore= document.querySelector('#winningScore');
let winningRun =3;

winningScore.addEventListener('change' ,function(){
    winningRun= parseInt(winningScore.value);
    Reset();
})



let score1=0;
let score2=0;
inc1score.addEventListener('click', function()
{
    if(score1!==winningRun && score2 !==winningRun)
    {
      score1+=1;
      player1score.innerText=score1;
    }
    if(score1===winningRun)
    {
        player1score.classList.add('winner');
        player2score.classList.add('looser');
    }
})
inc2score.addEventListener('click', function()
{
    if(score2!==winningRun && score1!==winningRun)
    {
      score2+=1;
      player2score.innerText=score2;
    }
    if(score2===winningRun)
    {
        player2score.classList.add('winner');
        player1score.classList.add('looser');
    }
})
reset.addEventListener('click',Reset);
    



function Reset()
{
    score1=0;
    score2=0;
    player1score.innerText=0;
    player2score.innerText=0;
    player1score.classList.remove('winner');
    player2score.classList.remove('winner')
    player1score.classList.remove('looser')
    player2score.classList.remove('looser')

}

