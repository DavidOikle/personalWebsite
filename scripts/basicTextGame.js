// VARIABLES

// Combat variables

var playerDamageRoll = 0;
var enemyDamageRoll = 0;

//Player info variables

var playerHealth = null;
var playerProfession = '';
var playerMaxHealth = null;
var playerExperience = null;
var playerMaxExperience = null;
var playerGold = 0;

//Enemy info variables

let enemyHealth = null;
let enemyProfession = '';

//DOM HTML classes and ID's imported into JS

const randomNumAttack = document.getElementById("attackButton");
const warriorButton = document.getElementById("warriorButton");
const rogueButton = document.getElementById("rogueButton");
const wizardButton = document.getElementById("wizardButton");
const playerHealthDisplay = document.getElementById("pHealth");
const playerProfessionDisplay = document.getElementById("pProfession");
const playerMaxHealthDisplay = document.getElementById("pMaxHealth");
const playerMaxExperienceDisplay = document.getElementById("pMaxExperience");
const playerExperienceDisplay = document.getElementById("pExperience");
const playerGoldDisplay = document.getElementById("pGold");
const randomEnemyButton = document.getElementById("randomEnemyButton");
const enemyHealthDisplay = document.getElementById("eHealth")
const enemyMaxHealthDisplay = document.getElementById("eMaxHealth")
const enemyProfessionDisplay = document.getElementById("eProfession")

//DOM Html info import contd. Not sure if these are actually needed, since all of these are either 0 or null to start, and the functions themselves fill these in,
//but I'm leaving these here for now. 

playerHealthDisplay.innerHTML = playerHealth;
playerProfessionDisplay.innerHTML = playerProfession;
playerMaxHealthDisplay.innerHTML = playerMaxHealth;
playerMaxExperienceDisplay.innerHTML = playerMaxExperience;
playerGoldDisplay.innerHTML = playerGold;
enemyHealthDisplay.innerHTML = enemyHealth;
enemyProfessionDisplay.innerHTML = enemyProfession;





//FUNCTIONS

//Combat functions

function combat(){
    enemyAttack();
    playerAttack();
   
randomNumAttack.addEventListener("click", combat);



let enemyAttack = () => {
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

let playerAttack = () => {
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
  playerExperience++;
   playerExperienceDisplay.innerHTML = playerExperience;

  playerHealth = playerHealth + playerMaxHealth * 0.5;
  if (playerHealth > playerMaxHealth) {
    playerHealth = playerMaxHealth
  }
}
 playerCombatLog.innerHTML = `You strike for ${playerDamageRoll} damage.`;
}

//randomNumAttack.addEventListener("click", playerAttack);
//randomNumAttack.addEventListener("click", enemyAttack);

// Player Profession choice - updates playerProfession and playerHealth.

const playerChoiceWarrior = () => {
  playerProfession = "Warrior";
  playerHealth = 10;
  playerMaxHealth = 10;
  playerHealthDisplay.innerHTML = playerHealth;
  playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
  document.getElementById("warriorButton").style.visibility = "hidden";
  document.getElementById("rogueButton").style.visibility = "hidden";
  document.getElementById("wizardButton").style.visibility = "hidden";
};

const playerChoiceRogue = () => {

  playerProfession = "Rogue";
  playerHealth = 8;
  playerMaxHealth = 8;
  playerHealthDisplay.innerHTML = playerHealth;
   playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
  document.getElementById("warriorButton").style.visibility = "hidden";
  document.getElementById("rogueButton").style.visibility = "hidden";
  document.getElementById("wizardButton").style.visibility = "hidden";
};

const playerChoiceWizard = () => {

  playerProfession = "Wizard";
  playerHealth = 6;
  playerMaxHealth = 6;
  playerHealthDisplay.innerHTML = playerHealth;
   playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
  document.getElementById("warriorButton").style.visibility = "hidden";
  document.getElementById("rogueButton").style.visibility = "hidden";
  document.getElementById("wizardButton").style.visibility = "hidden";
};

warriorButton.addEventListener("click", playerChoiceWarrior);
rogueButton.addEventListener("click", playerChoiceRogue);
wizardButton.addEventListener("click", playerChoiceWizard);



const randomEnemyFunction = () => {
      const randomEnemyNumber = Math.floor(Math.random() * 3) 
          if (randomEnemyNumber == 0){
            enemyProfession = "Bandit"
            enemyHealth = "8";
            enemyMaxHealth = "8";
          }
          else if (randomEnemyNumber == 1){
            enemyProfession = "Brute"
            enemyHealth = "10";
            enemyMaxHealth = "10";
          }
          else if (randomEnemyNumber == 2){
            enemyProfession = "Necromancer"
            enemyHealth = "6";
            enemyMaxHealth = "6";
          }
    document.getElementById("randomEnemyButton").style.visibility = "hidden";
    enemyHealthDisplay.innerHTML = enemyHealth;
    enemyMaxHealthDisplay.innerHTML = enemyMaxHealth;
    enemyProfessionDisplay.innerHTML = enemyProfession;
}
randomEnemyButton.addEventListener("click", randomEnemyFunction);
















/*
Factory functions inital setup.

function enemyFactory(enemyProfession, enemyHealth, enemyMaxHealth){
  return {
    enemyProfession,
    enemyHealth,
    enemyMaxHealth,
  }
}


const newEnemy = enemyFactory('Bandit', 8, 8)


*/



/*Pseduo code/overall logic for functions:

Until I can figure out a way to just run/constantly loop certain functions until specific criteria are met (EX: player HP reaches 0, so restart the game), the following idea may be the best option:
Seperate out any and all functions.
For every round of combat, run a parent function that also calls and runs all childern. 
Childern include: 
Combat rolls for player and enemy.
Player health
Enemy health/combat end
Player XP

Could subdivide these into the following as most only need to be called at specific times:
During encounter
Post encounter

The idea is the following:

startingFunction(gameplay or something) = () => {
   if in combat (can setup a variable that flips a boolean from false to true and then checks) then run the following group of functions: combat rolls and such
   if enemy health reaches 0, run the following: xp gain, gold gain, etc. 
}
One tricky part for this is if the code is constantly searching for if the enemy reaches 0 hp, outside of combat the enemy can't be resting at 0. Make sure to keep them at null outside of combat.

*/


/*
Goals established dec 24th 2022. Not to all be done on the 24th, but it gives a clear list of goals to try and tackle. Does not need to be done in order, expect for obvious ones. Kind of need to have a way to acquire XP in order to level up.
DONE DEC 31st 2022--- 1: reset health/enemy names to null/"" when the enemies health goes below 0. 
DONE DEC 31st 2022--- 2: Hide the random enemy button once it is clicked.
DONE DEC 31st 2022--- 3: Unhide the random enemy button once an enemy is defeated.
4: Hide the player class choice buttons when one is clicked.
DONE FEB 23rd 2023--- 5: Give the player a basic XP counter that increments by +1 when defeating an enemy.
6: Give the player a basic gold couunter that increments by a semi random value when defeating an enemy. Maybe rolls a number and either muliply it or add to is based on the type of enemy defeated.
7: Establish a game over/try again screen when the player is defeated.
DONE MARCH 4th 2023--- 8: Recover the player's health, to start when defeating an enemy. 
9: Establish a level up system for the player that makes the stronger, and recovers health when leveling. Also have it reset the XP counter, and raise said counter. 
10: Use of gold system. Buying healing at a shop, eventually items or something like that.
11: Additional inputs for the player, in particular a name + pronouns. Set the pronouns up in some sort of variable that can later be referenced like ${subjectPronoun} ${objectPronoun} (they/them respectivley in this case).
12: Rewrite the random enemy systme to instead use factory functions, or something similar. The Code academy tutorials for that seemed like a much better way to have a list of enemies. Overall need to start using more arrays and such instead of having longer form variables, as the former will help cut down on code.

Added Jan 2nd 2022: Combat log that shows the damage the player, and enemy dealt to eachother. 

*/

/* March 18th 2023
Rewriting functions and such, and building news ones. Goal is to instead invoke a bunch of functions when certan events happen, as opposed to those events being the functions themselves.

XP CHECK
Check player XP anytime it needs to be invoked. IE: A roll in combat (maybe end of combat?)a quest being completed, etc etc.

let playerExperienceCheck = () => {
   if (playerExperience >= playerMaxExperience) {
      playerExperience = 0;
      playerLevel++;
      playerMaxExperience = 10 + playerLevel * 2;
      playerMaxHealth = playerMaxHealth + 1;
      playerHealth = playerMaxHealth;
   }
}





*/


