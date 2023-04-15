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





/* Make a larger function thats maybe just called "Skills". Add it to the larger combat function, and make it so its just super long and has all the skills contained in it or something.
Each skill starts with an check for the relevant ID, and provides the damage caluclations for the relevant skill.

On the HTML side, each skill button has a class that they all share, and the ID's are updated when a skill is chosen and such.

The parent class for the skill buttons is for invoking the larger function, and the ID acts as the check.

Probably need to make an empty variable that gets filled with the relvant skills ID, and then THAT variable is what's checked for the "if {}".*/ 