var a=Math.random();
a=a*6;
a=Math.floor(a)+1;
var ri="dice"+a+".png";
var i1=document.querySelector(".img1").setAttribute("src", ri);


var b=Math.random();
b=b*6;
b=Math.floor(b)+1;
var rr="dice"+b+".png";
var i2=document.querySelector(".img2").setAttribute("src", rr);


if(a>b)
{
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(b>a)
{
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
