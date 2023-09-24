
function getComputerChoice(words) {
    var words = ['Rock', 'Paper', 'Scissor']
    return words = words[Math.floor(Math.random()*words.length)];
}
var words = ['Rock', 'Paper', 'Scissor']
console.log(getComputerChoice(words))