let optionScreen = document.querySelector(".optionScreen");
let storyOpening = document.querySelector(".story-opening");
let optionTwoScreen = document.querySelector(".optionTwoScreen");
let optionDead1 = document.querySelector(".optionDead1");
let optionOne = document.querySelector(".optionOneScreen");
let optionOneContinue = document.querySelector(".optionOneContinue");
let optionDead2 = document.querySelector(".optionDead2");
let optionOne2 = document.querySelector(".optionOne2");
let optionOne3 = document.querySelector(".optionOne3");
let optionOneEnd = document.querySelector(".optionOneEnd");
let optionTwoEnd = document.querySelector(".optionTwoEnd");
let buttonOne = document.querySelector(".optionOne");
let buttonTwo = document.querySelector(".optionTwo");
let buttonThree = document.querySelector(".optionThree");
let buttonFour = document.querySelector(".optionFour");
let buttonFive = document.querySelector(".optionFive");
let buttonSix = document.querySelector(".optionSix");
let buttonSeven = document.querySelector(".optionSeven");
let buttonEight = document.querySelector(".optionEight");
let buttonStart = document.querySelector(".start");
let body =document.querySelector("body");

buttonStart.onclick = function(){
  optionScreen.style.display= "block";
  storyOpening.style.display= "none";
};

buttonOne.onclick = function(){
  optionOne.style.display= "block";
  optionScreen.style.display= "none";
};
optionOne.onclick =function(){
  optionOneContinue.style.display= "block";
  optionOne.style.display = "none";
}

buttonTwo.onclick =function(){
  optionScreen.style.display= "none";
  optionTwoScreen.style.display = "block";
}

buttonThree.onclick =function(){
  optionOne.style.display= "block";
  optionTwoScreen.style.display = "none";
}

buttonFour.onclick =function(){
  optionDead1.style.display= "block";
  optionTwoScreen.style.display = "none";
}

buttonFive.onclick =function(){
  optionOne2.style.display = "block";
  optionOneContinue.style.display = "none";
}

buttonSix.onclick =function(){
  optionDead2.style.display= "block";
  optionOneContinue.style.display = "none";
}

optionOne2.onclick =function(){
  optionOne3.style.display= "block";
  optionOne2.style.display= "none";
}

buttonSeven.onclick =function(){
  optionOneEnd.style.display= "block"
  optionOne3.style.display= "none"
}

buttonEight.onclick =function(){
  optionTwoEnd.style.display= "block"
  optionOne3.style.display= "none"
}