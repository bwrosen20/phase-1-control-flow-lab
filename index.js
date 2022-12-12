function scuberGreetingForFeet(price){
  if (price<400){
    let result='This one is on me!';
    return result;
  }
  else if (price>=400 && price<=2000){
  let result='That will be twenty bucks.';
  return result;
  }
  else if (price>2000 && price<=2500){
    let result='I will gladly take your thirty bucks.';
    return result;
  }
  else {
    let result='No can do.'
    return result;
  }
}

function ternaryCheckCity(city){
  let result;
  if (city=='NYC'){
    result='Ok, sounds good.'
    return result;
  }
  else {
    result='No go.'
    return result;
  }
}

function switchOnCharmFromTip(tip){
  if (tip=='generous'){
    let result='Thank you so much.';
    return result;
  }
  else if (tip=='not as generous'){
    let result='Thank you.';
    return result;
  }
  else {
    let result='Bye.';
    return result;
  }
}