function scuberGreetingForFeet(someValue){
  if (someValue <= 400){
    return 'This one is on me!';
  }
  else if (someValue >= 2001 && someValue < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else  (someValue > 2500) 
    return 'No can do.'
  
}

function ternaryCheckCity(){
let city = 'New York';
return city ? "Ok, sounds good." : "No go.";
};

function switchOnCharmFromTip(){
  switch (switchOnCharmFromTip) {
    case 'generous': console.log("Thank you so much.");
    case 'not as generous': console.log("Thank you.");
    break;
    default: console.log("Bye");
  }
}