const pClass = 'wizard'

const playerClassHealth = pClass => {
  if (pClass === 'warrior') {
    return 10;
  }
  else if (pClass === 'rouge') {
    return 8
  }
  else if (pClass === 'wizard') {
    return 6
  }
  else {
    return "Please select warrior, rouge, or wizard."
  }
};

const playerClass = pClass => {
  if (pClass === 'warrior') {
    return 'warrior';
  }
  else if (pClass === 'rouge') {
    return 'rouge'
  }
  else if (pClass === 'wizard') {
    return 'wizard'
  }
  else {
    return "Please select warrior, rouge, or wizard."
  }
}

console.log(`You are a ${pClass}, your health is ${playerClassHealth(`${pClass}`)} `)

