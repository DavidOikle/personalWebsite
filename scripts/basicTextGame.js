/* Attacking an enemy/enemy attacking the player at the same time. */

const randomNumAttack = document.getElementById("attackButton");

//  playerCombatLog.innerHTML = `You strike for ${playerDamageRoll()} damage.`

var playerDamageRoll = 0;
var enemyDamageRoll = 0;

const handleAttack = () => {

  playerDamageRoll = Math.floor(Math.random() * 10  ) + 1;
  enemyHealth = enemyHealth - playerDamageRoll;
  enemyHealthDisplay.innerHTML = enemyHealth;

  // Resets the Enemy Health and Enemy Profession boxes when the enemy's health hits 0 or less.
  if (enemyHealth <= 0) {
  enemyHealth = null;
  enemyProfession = '';
  enemyHealthDisplay.innerHTML = enemyHealth;
  enemyProfessionDisplay.innerHTML = enemyProfession;
   document.getElementById("randomEnemyButton").style.visibility = "visible";
  playerExperience = playerExperience++;
   playerExperinceDisplay.innerHTML = playerExperience;
} 

 playerCombatLog.innerHTML = `You strike for ${playerDamageRoll} damage.`;
 
}

const enemyAttack = () => {
   enemyDamageRoll = Math.floor(Math.random() * 4  ) + 1;
   playerHealth = playerHealth - enemyDamageRoll;
   playerHealthDisplay.innerHTML = playerHealth;

     if (playerHealth <= 0) {
  playerHealth = null;
  playerMaxHealth = null;
  playerProfession = '';
  playerHealthDisplay.innerHTML = playerHealth;
  playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
}
 enemyCombatLog.innerHTML = `The enemy strikes you ${enemyDamageRoll} damage.`;
}


// Condense this by having a parent function surround the handleAattack and enemyAttack function, and then invoke that single function. Maybe call it just combat or something?
randomNumAttack.addEventListener("click", handleAttack);
randomNumAttack.addEventListener("click", enemyAttack);

// Player Profession choice - updates playerProfession and playerHealth.

const warriorButton = document.getElementById("warriorButton");
const rogueButton = document.getElementById("rogueButton");
const wizardButton = document.getElementById("wizardButton");
const playerHealthDisplay = document.getElementById("pHealth");
const playerProfessionDisplay = document.getElementById("pProfession");
const playerMaxHealthDisplay = document.getElementById("pMaxHealth");
const playerMaxExperienceDisplay = document.getElementById("pMaxExperience");
const playerExperienceDisplay = document.getElementById("pExperience");

let playerHealth = null;
let playerProfession = '';
let playerMaxHealth = null;
let playerExperience = null;
let playerMaxExperience = null;

playerHealthDisplay.innerHTML = playerHealth;
playerProfessionDisplay.innerHTML = playerProfession;
playerMaxHealthDisplay.innerHTML = playerMaxHealth;
let playerExperienceDisplay.innerHTML = playerExperience;
playerMaxExperienceDisplay.innerHTML = null;


const playerChoiceWarrior = () => {
  playerProfession = "Warrior";
  playerHealth = 10;
  playerMaxHealth = 10;
  playerHealthDisplay.innerHTML = playerHealth;
  playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
};

const playerChoiceRogue = () => {

  playerProfession = "Rogue";
  playerHealth = 8;
  playerMaxHealth = 8;
  playerHealthDisplay.innerHTML = playerHealth;
   playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
};

const playerChoiceWizard = () => {

  playerProfession = "Wizard";
  playerHealth = 6;
  playerMaxHealth = 6;
  playerHealthDisplay.innerHTML = playerHealth;
   playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
};

warriorButton.addEventListener("click", playerChoiceWarrior);
rogueButton.addEventListener("click", playerChoiceRogue);
wizardButton.addEventListener("click", playerChoiceWizard);

/* Random Enemy Generator. Like the class choice generator, it at the moment can be clicked to give a new option each time. Eventually need to add in a part where it hides the button upon being clicked, and then later on, shows the button once the enemy's health is 0 or lower. */

/* One future change I'd like to have for the player profession and random enemy is changing how they update the Profession and Health displays in the HTML. In the middle term, having an array contain all the different options, and then having the update occur in a higher level function would be good. At the moment, anytime I want to change the health for example, I have to include that in each function, and that seems tedious? There must be a more efficent way of doing that. Having a top level fucntion do that, with a few empty values that are filled with health, attack, or other items? 

UPDATE: Dec 7th 2022: Not 5 minutes later do I start the factory functions section in code acadmey. DO THIS INSTEAD CAUSE OH GOD IT WILL MAKE IT SO MUCH EASIER AND CUT DOWN ON A TON OF CODE.*/

const randomEnemyButton = document.getElementById("randomEnemyButton");
const enemyHealthDisplay = document.getElementById("eHealth")
const enemyProfessionDisplay = document.getElementById("eProfession")

let enemyHealth = null;
let enemyProfession = '';

enemyHealthDisplay.innerHTML = enemyHealth;
enemyProfessionDisplay.innerHTML = enemyProfession;

const randomEnemyFunction = () => {
      const randomEnemyNumber = Math.floor(Math.random() * 3) 
          if (randomEnemyNumber == 0){
            enemyProfession = "Bandit"
            enemyHealth = "8";
          }
          else if (randomEnemyNumber == 1){
            enemyProfession = "Brute"
            enemyHealth = "10";
          }
          else if (randomEnemyNumber == 2){
            enemyProfession = "Necromancer"
            enemyHealth = "6";
          }
    document.getElementById("randomEnemyButton").style.visibility = "hidden";
    enemyHealthDisplay.innerHTML = enemyHealth;
    enemyProfessionDisplay.innerHTML = enemyProfession;
}
randomEnemyButton.addEventListener("click", randomEnemyFunction);


// ----- Combat Log

/* Need to establish a box in the HTML, have it have 2 sections. One for the player's damage, one for the enemy. 

Within those, have 2 parts that each are imported into the JS side. 
Then have the output of the JS side reflect the damage and such dealt. Find where the damage each side does is stored, and 

*/







/*
Goals established dec 24th 2022. Not to all be done on the 24th, but it gives a clear list of goals to try and tackle. Does not need to be done in order, expect for obvious ones. Kind of need to have a way to acquire XP in order to level up.
DONE DEC 31st 2022--- 1: reset health/enemy names to null/"" when the enemies health goes below 0. 
DONE DEC 31st 2022--- 2: Hide the random enemy button once it is clicked.
DONE DEC 31st 2022--- 3: Unhide the random enemy button once an enemy is defeated.
4: Hide the player class choice buttons when one is clicked.
5: Give the player a basic XP counter that increments by +1 when defeating an enemy.
6: Give the player a basic gold couunter that increments by a semi random value when defeating an enemy. Maybe rolls a number and either muliply it or add to is based on the type of enemy defeated.
7: Establish a game over/try again screen when the player is defeated.
8: Recover the player's health, to start when defeating an enemy. 
9: Establish a level up system for the player that makes the stronger, and recovers health when leveling. Also have it reset the XP counter, and raise said counter. 
10: Use of gold system. Buying healing at a shop, eventually items or something like that.
11: Additional inputs for the player, in particular a name + pronouns. Set the pronouns up in some sort of variable that can later be referenced like ${subjectPronoun} ${objectPronoun} (they/them respectivley in this case).
12: Rewrite the random enemy systme to instead use factory functions, or something similar. The Code academy tutorials for that seemed like a much better way to have a list of enemies. Overall need to start using more arrays and such instead of having longer form variables, as the former will help cut down on code.

Added Jan 2nd 2022: Combat log that shows the damage the player, and enemy dealt to eachother. 

*/


