export { generateArrayRandomNumbers, generateRandomBoolean, generateRandomNumber, generateObject };

//Generates random Number(s), between 0 and range. Output is an array of length long
const generateArrayRandomNumbers = (range, arrayLength) => {
  let arrayOfNumbers = [];
  while (arrayOfNumbers.length < arrayLength) {
    let r = Math.floor(Math.random() * (range - 1));
    if (arrayOfNumbers.indexOf(r) === -1) arrayOfNumbers.push(r);
  }
  return arrayOfNumbers;
};

//Generates random Boolean > balance should be a number between 0 and 1
const generateRandomBoolean = (balance) => Math.random() >= balance;

//Generates random Number between 0 and range
const generateRandomNumber = (range) => Math.floor(Math.random() * range);

//Question Object-maker > takes in data Array and Array with numbers
const generateObject = (objectsArray, numsArray) => {
  const One = objectsArray[numsArray[0]];
  const Two = objectsArray[numsArray[1]];
  const Three = objectsArray[numsArray[2]];
  const Four = objectsArray[numsArray[3]];
  return {
    One,
    Two,
    Three,
    Four,
  };
};
