function bestGame(){
  let usersGuess = prompt('What is the best game of 2022?');
  
  while (usersGuess !== 'Kirby'){
    usersGuess = prompt('Wrong! Try again');
  }
}
bestGame();

function userName(){
  let userInput= prompt('What is your name?')
  while (userInput == ''){
    userInput= prompt('seriously what is your name?')
    document.write("Welcome "+ userInput + "!")
  }
}
userName();


function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
