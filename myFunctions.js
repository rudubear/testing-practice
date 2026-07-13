function capitalize(myString) {
  const capitalized = myString.charAt(0).toUpperCase() + myString.slice(1);
  return capitalized;
}

function reverseString(myString) {
  let reversedString = "";
  for (i = myString.length - 1; i >= 0; i--) {
    reversedString += myString[i];
  }
  return reversedString;
}

const calculator = (function () {
  return {
    add: function (a, b) {
      return a + b;
    },

    subtract: function (a, b) {
      return a - b;
    },

    divide: function (a, b) {
      return a / b;
    },

    multiply: function (a, b) {
      return a * b;
    },
  };
})();

function ceaserCipher(myString, shift) {
  //if (myString === "xyz" && shift === 3) return "abc";
  //if (myString === "HeLLo" && shift === 3) return "KhOOr";
  //if (myString === "Hello, World!" && shift === 3) return "Khoor, Zruog!";
  //return myString;

  let myCaeserCipherShiftedString = "";
  for (let i = 0; i < myString.length; i++) {
    myCaeserCipherShiftedString += shiftCharacter(myString[i], shift);
  }

  function shiftCharacter(char, shiftFactor, alphabet) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (lowerAlphabet.includes(char)) {
      let locationOfChar = lowerAlphabet.indexOf(char);
      let newCharLocation = locationOfChar + shiftFactor;
      if (newCharLocation > lowerAlphabet.length - 1) {
        newCharLocation = newCharLocation % lowerAlphabet.length;
      }
      return lowerAlphabet[newCharLocation];
    } else if (upperAlphabet.includes(char)) {
      let locationOfChar = upperAlphabet.indexOf(char);
      let newCharLocation = locationOfChar + shiftFactor;
      if (newCharLocation > upperAlphabet.length - 1) {
        newCharLocation = newCharLocation % upperAlphabet.length;
      }
      return upperAlphabet[newCharLocation];
    } else {
      return char;
    }
  }
  return myCaeserCipherShiftedString;
}

function analyzeArray(myArray) {
  let returnObj = { average: 4, min: 1, max: 8, length: 6 };
  let arraySum = myArray.reduce((acc, curr) => acc + curr, 0);
  let arrayMin = myArray.reduce((acc, curr) => (acc < curr ? acc : curr));
  let arrayMax = myArray.reduce((acc, curr) => (acc > curr ? acc : curr));
  let arrayLength = myArray.length;
  let arrayAverage = arraySum / arrayLength;

  returnObj.average = arrayAverage;
  returnObj.min = arrayMin;
  returnObj.max = arrayMax;
  returnObj.length = arrayLength;

  return returnObj;
}

export { capitalize, reverseString, calculator, ceaserCipher, analyzeArray };
