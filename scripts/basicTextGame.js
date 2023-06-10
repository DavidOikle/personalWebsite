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
var playerProfessionCheck = "";



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
//const = document.getElementById("skillSlot1");

/* const charge = document.getElementById("charge");
const fireBall = document.getElementById("fireBall");
const poisonDart = document.getElementById("poisonDart");
const cleave = document.getElementById("cleave");
const frostSpray = document.getElementById("frostSpray");
const fireWorksVolley = document.getElementById("fireWorksVolley");
const shieldBash = document.getElementById("shieldBash");
const staticShield = document.getElementById("staticShield");
const doubleImage = document.getElementById("doubleImage"); */











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
      document.getElementById("chargeButton").style.visibility = "visible";

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
  document.getElementById("chargeButton").style.visibility = "hidden";
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
  skillChoiceOne.innerHTML = "Charge";
  skillChoiceTwo.innerHTML = "Cleave";
  skillChoiceThree.innerHTML = "Shield Bash";
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
  skillChoiceOne.innerHTML = "Poison Dart";
  skillChoiceTwo.innerHTML = "Fire Works Volley";
  skillChoiceThree.innerHTML = "Double Image";
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
  skillChoiceOne.innerHTML = "Fire Ball";
  skillChoiceTwo.innerHTML = "Frost Spray";
  skillChoiceThree.innerHTML = "Static Shield";
  document.getElementsByClassName("fullScreenMenu")[0].style.visibility = 'hidden';
};


warriorButton.addEventListener("click", playerChoiceWarrior);
rogueButton.addEventListener("click", playerChoiceRogue);
wizardButton.addEventListener("click", playerChoiceWizard);

randomNumAttack.addEventListener("click", meleeAttack);
randomNumAttack.addEventListener("click", combat);
randomEnemyButton.addEventListener("click", randomEnemyFunction);
testButton.addEventListener("click", skillSetup);


function skillSetup() {
  menuTwo();
}

let menuTwo = () => {
  playerProfessionCheck = playerProfession;

   /* if (playerProfessionCheck == "warrior") {};
    if (playerProfessionCheck == "wizard") {};
    if (playerProfessionCheck == "rogue") {}; */
  document.getElementsByClassName("fullScreenMenuTwo")[0].style.visibility = "visible";
}

let skillChoiceOneEnable = () => {
  playerProfessionCheck = playerProfession;
 
  if (playerProfessionCheck.value == "warrior") {
  console.log(playerProfession);
    document.getElementById("chargeButton").style.visibility = "visible";
  }
  if (playerProfessionCheck == "wizard") {
    document.getElementById("fireBallButton").style.visibility = "visible";
  }
  if (playerProfessionCheck == "rogue") {
    document.getElementById("poisonDartButton").style.visibility = "visible";
  }
  document.getElementsByClassName("fullScreenMenuTwo")[0].style.visibility = "hidden";  
}

let skillChoiceTwoEnable = () => {
  playerProfessionCheck = playerProfession;
  if (playerProfessionCheck == "warrior") {
    document.getElementById("cleaveButton").style.visibility = "visible";
  }
  if (playerProfessionCheck == "wizard") {
    document.getElementById("frostSprayButton").style.visibility = "visible";  
  }
  if (playerProfessionCheck == "rogue") {
    document.getElementById("fireWorksVolleyButton").style.visibility = "visible";  
  }
  document.getElementsByClassName("fullScreenMenuTwo")[0].style.visibility = "hidden";
}

let skillChoiceThreeEnable = () => {
  playerProfessionCheck = playerProfession;
  if (playerProfessionCheck == "warrior") {
    document.getElementById("shieldBashButton").style.visibility = "visible";
  }
  if (playerProfessionCheck == "wizard") {
    document.getElementById("staticShieldButton").style.visibility = "visible";  
  }
  if (playerProfessionCheck == "rogue") {
    document.getElementById("doubleImageButton").style.visibility = "visible";  
  }
  document.getElementsByClassName("fullScreenMenuTwo")[0].style.visibility = "hidden";
}  






skillChoiceOne.addEventListener("click", skillChoiceOneEnable);
skillChoiceTwo.addEventListener("click", skillChoiceTwoEnable);
skillChoiceThree.addEventListener("click", skillChoiceThreeEnable);






