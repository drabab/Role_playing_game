import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js"


const getPercentage = (remainingHealth, maximumHealth)=>
      (100 * remainingHealth) / maximumHealth
    


function Character(data){
    Object.assign(this, data)
    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.maxHealth = this.health
    
            
    this.getDiceHtml = function () {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map ((num)=> `<div class="dice">${num}</div>`).join("")    
    
    }
    this.takeDamage = function(attackScoreArray){
        const totalAttackScore = attackScoreArray.reduce((total, num)=> total + num)
        this.health -=totalAttackScore  
        
        if (this.health<=0){
            this.dead = true
            this.health = 0  
        }

        console.log(getPercentage(this.health, this.maxHealth))

     }
 
    this.getCharacterHtml = function() {
         const { elementId, name, avatar, health, diceCount } = this;
         
         return `
             <div class="character-card">
                 <h4 class="name"> ${name} </h4>
                 <img class="avatar" src="${avatar}" />
                 <div class="health">health: <b> ${health} </b></div>
                 <div class="dice-container">    
                     ${this.diceArray}
                 </div>
             </div>`;
    }    
   
     
}

 export default Character
