function guessColor(){
  let usersGuess = prompt('what is my fav color?');
  
  while (usersGuess !== 'yellow'){
    usersGuess = prompt('Wrong! Guess again');
  }
}
guessColor();

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
