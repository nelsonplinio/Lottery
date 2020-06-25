const result = [];

while (result.length < 5) {
  const luckNumber = Math.floor((Math.random() * 80) + 1);

  const checkIfContains = result.find(num => num === luckNumber);

  if (checkIfContains) {
    continue;
  }

  const checkIfContainsInSameLine = result.find(num => {
    return String(luckNumber)[0] === String(num)[0]
  });

  if (checkIfContainsInSameLine) {
    continue;
  }

  result.push(luckNumber);
}

console.log(`Luke nubers`, result.sort((n1, n2) => n1 - n2))
