import characterData from "./data.js"

import Character from "./Character.js"

function attack(){
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    render() 
    if (wizard.dead || orc.dead) {
        endGame()
    }
}


/*CHALLENGE
1. Create a second const in endGame called endEmoji.
2. Figure out how to set it to hold the emoji "🔮" if the 
wizard wins, and "☠️" if the orc wins. If both characters 
are dead use "☠️".
3. Finally, take the html template string below render it 
to the screen so it replaces everything else when the game 
is over.

*/

function endGame(){
    const endMessage = wizard.health === 0 && orc.health === 0 ? "No victors - all creatures are dead" :
        wizard.health > 0 ? "The Wizard Wins" : "The Orc is Victorious"

    const endEmoji = wizard.health > 0 ? "🔮" : "☠️" 
    
    document.body.innerHTML =
        `<div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>` 
    
}
   

function render(){
    document.getElementById("hero").innerHTML=wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}
document.getElementById("attack-button").addEventListener("click", attack)

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster) 
render()







