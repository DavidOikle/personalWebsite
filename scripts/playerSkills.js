// Right now all the skills are in a single array, and avaible to each class. Eventually the plan is to have discrete arrays for each class.
// Long term, it might be neat to have skills have requirements, espically in the case of some skills getting buffed.

// Import to this file the relevant stats from the player that affect the skill damage.

// List of skill stats

const fireball = ["Fireball", 10];
const marksmanship = ["Marksmanship", 10];
const charge= ["Charge", 10];

// List of skills Array

const skillArray = [fireball, marksmanship, charge];

// Function to pick a random enemy from the EnemyArray

const randomSkill = skillArray[Math.floor(Math.random() * skillArray.length)];

// Variables to take individual parts of each array, prep for export.

let skillName = randomSkill[0]
let skillDamage = randomSkill[1]

// Export the enemy variables

export const skillNameExport = skillName;
export const skillDamageExport = skillDamage;
export const skillArrayExport = skillArray;
