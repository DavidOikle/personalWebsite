// JS imports from other files

import {enemyArrayExport} from "./enemyList.js"    
import {skillArrayExport, skillNameExport, skillDamageExport} from "./playerSkills.js";

//Variables

var playerDamageRoll = 0;
var enemyDamageRoll = 0;
var playerHealth = 0;
var playerProfession = '';
var playerMaxHealth = 0;
var playerExperience = 0;
var playerMaxExperience = 10;
var playerGold = 0;
var enemyProfession = '';
var playerLevel = 1;
var strength = 0;
var dexterity = 0;
var intelligence = 0
var enemyArray = enemyArrayExport;
var enemyHealth = null;
var enemyMaxHealth = null;
var skillArray = skillArrayExport;
var skillName = "";
var skillDamage = null;



//DOM imports from HTML into JS
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
const playerLevelDisplay = document.getElementById("pLevel")
const playerStrengthDisplay = document.getElementById("strength")
const playerDexterityDisplay = document.getElementById("dexterity")
const playerIntelligenceDisplay = document.getElementById("intelligence")
const fullScreenMenu = document.getElementsByClassName("fullScreenMenu")[0];
const testButton = document.getElementById("testButton");
const fullScreenMenuTop = document.getElementsByClassName("fullScreenMenuTop")[0];
const fullScreenMenuMiddle = document.getElementsByClassName("fullScreenMenuMiddle")[0];
const fullScreenMenuBottom = document.getElementsByClassName("fullScreenMenuBottom")[0];
const skillChoiceOne = document.getElementById("skillChoiceOne");
const skillChoiceTwo = document.getElementById("skillChoiceTwo");
const skillChoiceThree = document.getElementById("skillChoiceThree");
const skillSlot1 = document.getElementById("skillSlot1")
const Charge = document.getElementById("Charge")











// Combat Functions

// Parent combat function. Write the variables elsewhere, and then add to this. 
function combat() {
  handleAttack();
  enemyAttack();
  playerExperienceCheck()
}

//Individual combat functions

/* Parent player attack function that is filled by the other functions\
   
    Parent variable of "playerDamage = "Null""
parentAttack = () => {
  
  enemyHealth = (enemyHealth - playerDamage);
  enemyHealthDisplay.innerHTML = enemyHealth;
      
  if (enemyHealth <= 0) {
  enemyHealth = null;
  enemyMaxHealth = null;
  enemyProfession = '';
  enemyHealthDisplay.innerHTML = enemyHealth;
  enemyMaxHealthDisplay.innerHTML = enemyMaxHealth;
  enemyProfessionDisplay.innerHTML = enemyProfession;
  document.getElementById("randomEnemyButton").style.visibility = "visible";
  document.getElementById("attackButton").style.visibility = "hidden";
  playerExperience++;
  playerExperienceDisplay.innerHTML = playerExperience;

  playerHealth = playerHealth + playerMaxHealth * Math.round(0.5);
  if (playerHealth > playerMaxHealth) {
    playerHealth = playerMaxHealth
  }
}
 playerCombatLog.innerHTML = `You strike for ${playerDamageRoll} damage.`;
}
 */




var randomEnemyFunction = () => {
    var randomEnemy = enemyArray[Math.floor(Math.random() * enemyArray.length)];
    enemyProfession = randomEnemy[0];
    enemyHealth = randomEnemy[1];
    enemyMaxHealth = randomEnemy[1];
  
    document.getElementById("randomEnemyButton").style.visibility = "hidden";
    enemyHealthDisplay.innerHTML = enemyHealth;
    enemyMaxHealthDisplay.innerHTML = enemyMaxHealth;
    enemyProfessionDisplay.innerHTML = enemyProfession;
      document.getElementById("attackButton").style.visibility = "visible";

}





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

//Player combat Abilities

let meleeAttack = () => {
  playerDamageRoll = Math.floor(Math.random() * 4  ) + 1 + (strength - 10)
  if (playerDamageRoll < 1) {
    playerDamageRoll = 1;
  };
  return playerDamageRoll;
}

let charge = () => {
  playerDamageRoll = Math.floor(Math.random() * 4  ) + 1 + (strength - 10)
  if (playerDamageRoll < 1) {
    playerDamageRoll = 1;
  };
  return playerDamageRoll;
} 

let cleave = () => {
    playerDamageRoll = Math.floor(Math.random() * 4  ) + 1 + (strength - 10)
  if (playerDamageRoll < 1) {
    playerDamageRoll = 1;
  };
  return playerDamageRoll;
}

let shieldBash = () => {
  playerDamageRoll = Math.floor(Math.random() * 4  ) + 1 + (strength - 10)
  if (playerDamageRoll < 1) {
    playerDamageRoll = 1;
  };
  return playerDamageRoll;
}


let fireBall = () => {
  playerDamageRoll = Math.floor(Math.random() * 4  ) + 1 + (intelligence - 10)
  if (playerDamageRoll < 1) {
    playerDamageRoll = 1;
  };
  return playerDamageRoll;
}

let frostSpray = () => {
  playerDamageRoll = Math.floor(Math.random() * 4  ) + 1 + (intelligence - 10)
  if (playerDamageRoll < 1) {
    playerDamageRoll = 1;
  };
  return playerDamageRoll;
}

let staticShield = () => {
    playerDamageRoll = Math.floor(Math.random() * 4  ) + 1 + (dexterity - 10)
  if (playerDamageRoll < 1) {
    playerDamageRoll = 1;
  };
  return playerDamageRoll;
}

let poisonDart = () => {
      playerDamageRoll = Math.floor(Math.random() * 4  ) + 1 + (dexterity - 10)
  if (playerDamageRoll < 1) {
    playerDamageRoll = 1;
  };
  return playerDamageRoll;
}

let fireWorksVolley = () => {
      playerDamageRoll = Math.floor(Math.random() * 4  ) + 1 + (dexterity - 10)
  if (playerDamageRoll < 1) {
    playerDamageRoll = 1;
  };
  return playerDamageRoll;
}

let doubleImage = () => {
    playerDamageRoll = Math.floor(Math.random() * 4  ) + 1 + (dexterity - 10)
  if (playerDamageRoll < 1) {
    playerDamageRoll = 1;
  };
  return playerDamageRoll;
}

//parent appply player damage to enemy function
let handleAttack = () => {
  enemyHealth = (enemyHealth - playerDamageRoll);
  enemyHealthDisplay.innerHTML = enemyHealth;

  // Resets the Enemy Health and Enemy Profession boxes when the enemy's health hits 0 or less.
  


 // Resets the Enemy Health and Enemy Profession boxes when the enemy's health hits 0 or less.
  if (enemyHealth <= 0) {
  enemyHealth = null;
  enemyMaxHealth = null;
  enemyProfession = '';
  enemyHealthDisplay.innerHTML = enemyHealth;
  enemyMaxHealthDisplay.innerHTML = enemyMaxHealth;
  enemyProfessionDisplay.innerHTML = enemyProfession;
  document.getElementById("randomEnemyButton").style.visibility = "visible";
  document.getElementById("attackButton").style.visibility = "hidden";
  playerExperience++;
  playerExperienceDisplay.innerHTML = playerExperience;

  playerHealth = playerHealth + playerMaxHealth * Math.round(0.5);
  if (playerHealth > playerMaxHealth) {
    playerHealth = playerMaxHealth
  }
}
 playerCombatLog.innerHTML = `You strike for ${playerDamageRoll} damage.`;
}




let playerExperienceCheck = () => {
   if (playerExperience >= playerMaxExperience) {
      playerExperience = 0;
      playerLevel++;
      playerMaxHealth++;
      playerMaxExperience = (playerMaxExperience + playerLevel) * 2;
      playerHealth = playerMaxHealth;

      playerExperienceDisplay.innerHTML = 0;
      playerMaxExperienceDisplay.innerHTML = playerMaxExperience;
      playerMaxHealthDisplay.innerHTML = playerMaxHealth;
      playerHealthDisplay.innerHTML = playerMaxHealth;
      playerLevelDisplay.innerHTML = playerLevel;
   }
}


//Player profession choice functions

const playerChoiceWarrior = () => {
  playerProfession = "Warrior";
  playerHealth = 10;
  playerMaxHealth = 10;
  strength = 14;
  dexterity = 10
  intelligence = 8;
  playerHealthDisplay.innerHTML = playerHealth;
  playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
  playerStrengthDisplay.innerHTML = strength;
  playerDexterityDisplay.innerHTML = dexterity;
  playerIntelligenceDisplay.innerHTML = intelligence;
  document.getElementsByClassName("fullScreenMenu")[0].style.visibility = 'hidden';
};

const playerChoiceRogue = () => {

  playerProfession = "Rogue";
  playerHealth = 8;
  playerMaxHealth = 8;
  strength = 10;
  dexterity = 14;
  intelligence = 8;
  playerHealthDisplay.innerHTML = playerHealth;
  playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
  playerStrengthDisplay.innerHTML = strength;
  playerDexterityDisplay.innerHTML = dexterity;
  playerIntelligenceDisplay.innerHTML = intelligence;
  document.getElementsByClassName("fullScreenMenu")[0].style.visibility = 'hidden';
};

const playerChoiceWizard = () => {

  playerProfession = "Wizard";
  playerHealth = 6;
  playerMaxHealth = 6;
  strength = 8;
  dexterity = 10;
  intelligence = 14;
  playerHealthDisplay.innerHTML = playerHealth;
  playerMaxHealthDisplay.innerHTML = playerMaxHealth;
  playerProfessionDisplay.innerHTML = playerProfession;
  playerStrengthDisplay.innerHTML = strength;
  playerDexterityDisplay.innerHTML = dexterity;
  playerIntelligenceDisplay.innerHTML = intelligence;
  document.getElementsByClassName("fullScreenMenu")[0].style.visibility = 'hidden';
};


warriorButton.addEventListener("click", playerChoiceWarrior);
rogueButton.addEventListener("click", playerChoiceRogue);
wizardButton.addEventListener("click", playerChoiceWizard);

randomNumAttack.addEventListener("click", meleeAttack);
randomNumAttack.addEventListener("click", combat);





/* When clicking the test button, pop up a menu that replaces the bottom text with 3 buttons. 
When one of those buttons is clicked, it replaces the SKILL ONE slot with the respective skill.

First step is to inser the 3 buttons in the fullScreenMenuBottom.innerHTML. 

 */







//Old stuff to sort through at a later date: 
/*



let skillSlotName = skillName;

function skills() {
  skillFunctionOne();
  skillFunctionTwo();
  skillFunctionThree();
}

var randomSkillFunction = () => {
  var randomSkill = skillArray[Math.floor(Math.random() * skillArray.length)];
  skillName = randomSkill[0];
  skillDamage = randomSkill[1];
  skillChoiceOne.innerHTML = skillName;
  skillChoiceTwo.innerHTML = "";
  skillChoiceThree.innerHTML = "";
}


function skillSetup() {
  randomSkillFunction();
  menuTwo();
 // skillEventListeners();
}


let menuTwo = () => {
  
    document.getElementById("warriorButton").style.visibility = 'hidden';
    document.getElementById("rogueButton").style.visibility = 'hidden';
    document.getElementById("wizardButton").style.visibility = 'hidden';
    document.getElementById("skillChoiceOne").style.visibility = 'visible'
    document.getElementById("skillChoiceTwo").style.visibility = 'visible'
    document.getElementById("skillChoiceThree").style.visibility = 'visible'
    document.getElementsByClassName("fullScreenMenu")[0].style.visibility = 'visible';
  

    
  fullScreenMenuTop.innerHTML = "Choose a skill";
  fullScreenMenuMiddle.innerHTML = "Starting at level 2, every 2 levels you get to choose a skill. Subject to change, and will eventually include passives and such. TOOLTIPS COMING EVENTUALLY.";
  //fullScreenMenuBottom.innerHTML = "MenuOne Bottom Text";
  //skillChoiceOne.innerHTML= skillName;
  //skillChoiceTwo.innerHTML= "Skill Two";
  //skillChoiceThree.innerHTML = "Skill Three";
}



const skillFunctionOne = () => {
  
  document.getElementsByClassName("fullScreenMenu")[0].style.visibility = 'hidden';
  document.getElementById("skillChoiceOne").style.visibility = 'hidden'
  document.getElementById("skillChoiceTwo").style.visibility = 'hidden'
  document.getElementById("skillChoiceThree").style.visibility = 'hidden'
  skillSlot1.innerHTML = skillName;
  document.getElementById("skillSlot1").setAttribute("id", skillName)
}

const skillFunctionTwo = () => {
  document.getElementsByClassName("fullScreenMenu")[0].style.visibility = 'hidden';
  document.getElementById("skillChoiceOne").style.visibility = 'hidden'
  document.getElementById("skillChoiceTwo").style.visibility = 'hidden'
  document.getElementById("skillChoiceThree").style.visibility = 'hidden'
  
}

const skillFunctionThree = () => {
  document.getElementsByClassName("fullScreenMenu")[0].style.visibility = 'hidden';
  document.getElementById("skillChoiceOne").style.visibility = 'hidden'
  document.getElementById("skillChoiceTwo").style.visibility = 'hidden'
  document.getElementById("skillChoiceThree").style.visibility = 'hidden'
}


//Event Listeners








randomEnemyButton.addEventListener("click", randomEnemyFunction);
testButton.addEventListener("click", skillSetup);
skillChoiceOne.addEventListener("click", skills);
skillChoiceTwo.addEventListener("click", skills);
skillChoiceThree.addEventListener("click", skills);





*/

  










