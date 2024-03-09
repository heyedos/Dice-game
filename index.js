document.query
function myFunction()
{
    var randomNumber1=Math.floor(Math.random()*6);
    var randomNumber2=Math.floor(Math.random()*6);
    var images=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice5.png","images/dice4.png","images/dice6.png"];
    document.querySelector(".img1").setAttribute("src",images[randomNumber1]);
    document.querySelector(".img2").setAttribute("src",images[randomNumber2]);
    if (randomNumber1>randomNumber2){
        var winner="Player 1 Wins";
    }   
    else if (randomNumber1===randomNumber2)
    {
        var winner="Draw";
    }
    else
    {
        var winner="Player 2 Wins";
    }
    document.querySelector("h1").textContent=winner;
}
