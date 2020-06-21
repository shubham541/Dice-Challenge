
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

var filePath1="images/dice"+randomNumber1+".png";
var filePath2="images/dice"+randomNumber2+".png";

//document.write(filePath1);
//document.write(filePath2);

document.getElementsByTagName("img")[0].setAttribute("src",filePath1);
document.getElementsByTagName("img")[1].setAttribute("src",filePath2);
if(randomNumber1>randomNumber2)
  document.getElementsByTagName("h1")[0].innerHTML="🚩 Player 1 Wins";
else if(randomNumber2>randomNumber1)
  document.getElementsByTagName("h1")[0].innerHTML="🚩 Player 2 Wins!";
else
  document.getElementsByTagName("h1")[0].innerHTML="Match Draw !!";
