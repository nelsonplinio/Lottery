const result = [];

while (result.length < 5) {
  let luckNumber = String(
    Math.floor((Math.random() * 80) + 1)
  ).padStart(2, 0);


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

console.log(`Luke numbers`, result.sort((n1, n2) => Number(n1) - Number(n2)));
