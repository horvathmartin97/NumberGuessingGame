console.log("hallo");


function generateRandomNumber(){
    return Math.floor(Math.random() *100) +1;
}
 const randomnumber = generateRandomNumber();


 const guess = getPlayerGuess()
 
 function getPlayerGuess(){
let guess = parseInt(prompt("Enter your Number, MUHAHAHAHA"));
while (isNaN(guess)) {
    guess = parseInt(prompt("Enter a valid number!"));
}
}

let attempts = 1;

checkGuess(guess);

function checkGuess(guess) {
    while (guess !== randomnumber) {
        attempts++;
        if (guess > randomnumber) {
            guess = parseInt(prompt("Too high! Enter a lower number!"));
        } else {
            guess = parseInt(prompt("Too loooow! Enter a higher number!"));
        }
    }
}
console.log(`YOU GOT IT!! It took you ${attempts} guesses`);
