// List of enemy stats

const bandit = ["Bandit", 10];
const necromancer = ["Necromancer", 5]
const brute = ["Brute", 15]

// List of enemies Array

const enemyArray = [bandit, necromancer, brute];

// Function to pick a random enemy from the EnemyArray

const randomEnemy = enemyArray[Math.floor(Math.random() * enemyArray.length)];

// Variables to take individual parts of each array, prep for export.

let enemyName = randomEnemy[0]
let enemyHealth = randomEnemy[1]

// Export the enemy variables

export const enemyNameExport = enemyName;
export const enemyHealthExport = enemyHealth;
export const enemyArrayExport = enemyArray;
