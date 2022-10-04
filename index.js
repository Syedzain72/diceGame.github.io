var randomNo1= Math.floor(Math.random()*6)+1;
var randomImg = "images/dice"+randomNo1+".png";

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImg);

var randomNo2= Math.floor(Math.random()*6)+1;
var randomImg2 = "images/dice"+randomNo2+".png";

var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImg2);

if(randomNo1>randomNo2){
  document.querySelector("h1").innerHTML="Player 1 Won";
}else if (randomNo2>randomNo1) {
    document.querySelector("h1").innerHTML="Player 2 Won";
}
else{
  document.querySelector("h1").innerHTML="Draw"
}
