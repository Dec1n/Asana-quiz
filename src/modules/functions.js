export {
  generateArrayRandomNumbers,
  generateRandomBoolean,
  randomNum,
  objectMaker,
};

//Generates random Number(s), between 0 and range. Output is an array of length long
const generateArrayRandomNumbers = (range, length) => {
  let nums = [];
  while (nums.length < length) {
    let r = Math.floor(Math.random() * (range - 1));
    if (nums.indexOf(r) === -1) nums.push(r);
  }
  return nums;
};

//Generates random Boolean > balance should be a number between 0 and 1
const generateRandomBoolean = (balance) => {
  return Math.random() >= balance;
};

//Generates random Number between 0 and range
const randomNum = (range) => {
  return Math.floor(Math.random() * range);
};

//Question Object-maker > takes in data Array and Array with numbers
const objectMaker = (data, array) => {
  const One = data[array[0]];
  const Two = data[array[1]];
  const Three = data[array[2]];
  const Four = data[array[3]];
  return {
    One,
    Two,
    Three,
    Four,
  };
};
