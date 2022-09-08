// FOR IMAGE 1

var randomNumber1=Math.floor((Math.random()*6)+1);

var randomDiceImg1="dice"+ randomNumber1 +".png";

var image1=document.querySelectorAll(".img1")[0];
image1.setAttribute("src",randomDiceImg1);

// FOR IMAGE 2

var randomNumber2=Math.floor((Math.random()*6)+1);

var randomDiceImg2="dice"+ randomNumber2 +".png";

var image2=document.querySelectorAll(".img2")[0];
image2.setAttribute("src",randomDiceImg2);


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="The Player 1 wins!";
}

else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="The Player 2 wins!";
}

else{
    document.querySelector("h1").innerHTML="It's a DRAW!";
}