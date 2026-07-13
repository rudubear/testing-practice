import {
  capitalize,
  reverseString,
  calculator,
  ceaserCipher,
  analyzeArray,
} from "./myFunctions";

describe("Testing Capitalization Function", () => {
  describe("Check if Capitalization Function Exists", () => {
    test("lets test capitalization", () => {
      expect(capitalize).toBeDefined();
    });
  });

  describe("Check actual string capitalization", () => {
    const capitalizationTests = [
      ["hello", "Hello"],
      ["awesome", "Awesome"],
      ["a really long sentence", "A really long sentence"],
    ];

    bulkTester1Input(capitalizationTests, "testing capitalization", capitalize);
  });
});

describe("Testing String Reversal Function", () => {
  describe("Check if String Reversal Function Exists", () => {
    test("String Reveral Function Existence", () => {
      expect(reverseString).toBeDefined();
    });
  });

  describe("Test actual string reversals", () => {
    const stringReversalTests = [
      ["hello", "olleh"],
      ["awesome", "emosewa"],
      ["a really long sentence", "ecnetnes gnol yllaer a"],
    ];

    bulkTester1Input(
      stringReversalTests,
      "string reversal test",
      reverseString
    );
  });
});

describe("Testing Calculator", () => {
  describe("Check if calculator exists", () => {
    test("Does calculator exist?", () => {
      expect(calculator).toBeDefined();
    });

    test("Do the required calculator functions exist?", () => {
      expect(calculator.add).toBeDefined();
      expect(calculator.subtract).toBeDefined();
      expect(calculator.multiply).toBeDefined();
      expect(calculator.divide).toBeDefined();
    });
  });

  describe("Check calculator add function", () => {
    const addTests = [
      [1, 1, 2],
      [3, 5, 8],
      [7, 5, 12],
    ];

    bulkTester2Input(addTests, "add test", calculator.add);
  });

  describe("Check calculator subtract function", () => {
    const subtractTests = [
      [1, 1, 0],
      [5, 7, -2],
      [9, 6, 3],
    ];

    bulkTester2Input(subtractTests, "substract test", calculator.subtract);
  });

  describe("Check calculator multiply function", () => {
    const multiplyTests = [
      [1, 1, 1],
      [5, 7, 35],
      [9, 6, 54],
    ];

    bulkTester2Input(multiplyTests, "multiply test", calculator.multiply);
  });

  describe("Check calculator divide function", () => {
    const divideTests = [
      [8, 4, 2],
      [12, 2, 6],
      [5, 2, 2.5],
    ];

    bulkTester2Input(divideTests, "divide test", calculator.divide);
  });
});

describe("Testing Caesar Cipher", () => {
  describe("Check if Ceasar Cipher exists", () => {
    test("Does the Caesar Cipher function exist?", () => {
      expect(ceaserCipher).toBeDefined();
    });
  });

  describe("Test Caesar Cipher function", () => {
    const ceasarCipherTests = [
      ["xyz", 3, "abc"],
      ["HeLLo", 3, "KhOOr"],
      ["Hello, World!", 3, "Khoor, Zruog!"],
    ];

    bulkTester2Input(ceasarCipherTests, "caesar cipher test", ceaserCipher);
  });
});

describe("Testing Analyze Array", () => {
  describe("Check if Array Analyzing function exists", () => {
    test("Does the Array Analyzing function exist?", () => {
      expect(analyzeArray).toBeDefined();
    });
  });

  describe("test the analyzeArray function", () => {
    const analyzeArrayTests = [
      [[1, 8, 3, 4, 2, 6], { average: 4, min: 1, max: 8, length: 6 }],
      [[1, 2, 3, 4, 5, 6, 7, 8, 9], { average: 5, min: 1, max: 9, length: 9 }],
      [[10, 20, 5, 40, 15], { average: 18, min: 5, max: 40, length: 5 }],
    ];

    bulkTester1Input(
      analyzeArrayTests,
      "testing inputs to the analyze Array function",
      analyzeArray
    );
  });
});

/**
 * Runs tests with input arrayOfTests on a targetTestFunction.
 *
 * ArrayOfTests must be of the form [
 *   [ "input 1" , "expected result 1"],
 *   [ "input 2" , "expected result 2"],
 *   [ "input 3" , "expected result 3"],
 *  ...
 * ]
 */
function bulkTester1Input(arrayOfTests, descriptionMsg, targetTestFunction) {
  arrayOfTests.forEach((testCase) => {
    test(`${descriptionMsg} :  ${testCase[0]}`, () => {
      let testInput = testCase[0];
      let expectedResult = testCase[1];
      expect(targetTestFunction(testInput)).toStrictEqual(expectedResult);
    });
  });
}

/**
 * Runs tests with input arrayOfTests on a targetTestFunction.
 *
 * ArrayOfTests must be of the form [
 *   [ "input 1a", "input 1b", "expected result 1"],
 *   [ "input 2a", "input 2b", "expected result 2"],
 *   [ "input 3a", "input 3b", "expected result 3"],
 *  ...
 * ]
 */
function bulkTester2Input(arrayOfTests, descriptionMsg, targetTestFunction) {
  arrayOfTests.forEach((testCase) => {
    test(`${descriptionMsg} :  ${testCase[0]} and ${testCase[1]}`, () => {
      let testInput1 = testCase[0];
      let testInput2 = testCase[1];
      let expectedResult = testCase[2];
      expect(targetTestFunction(testInput1, testInput2)).toStrictEqual(
        expectedResult
      );
    });
  });
}
