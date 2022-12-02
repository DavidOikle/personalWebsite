const randomNumButton = document.getElementById("randomButton");
const randomNumDisplay = document.getElementById("randomNumberDisplay")

var count = 0;

randomNumberDisplay.innerHTML = count;

const handleRandomNum = () => {

  count = Math.floor(Math.random() * 10  ) + 1;
  randomNumberDisplay.innerHTML = count;
}

randomNumButton.addEventListener("click", handleRandomNum);


let playerProfession = 'warrior';

let playerHealth = playerProfession => {
  if (playerProfession === 'warrior') {
    return 10
  }
  else if (playerProfession === 'rouge') {
    return 8
  }
  else if (playerProfession === 'wizard') {
    return 6
  }
};

document.getElementById("pHealth").innerHTML = `${playerHealth(playerProfession)}`;
document.getElementById("pProfession").innerHTML = `${playerProfession}`;


