import Dice from './';

describe('Create a new Dice object', () => {
  test('with default values (no parameters)', () => {
    const defaultDice = new Dice();
    expect(defaultDice.numOutcomes).toBe(6);
    expect(defaultDice.min).toBe(1);
    expect(defaultDice.max).toBe(6);
  });

  test('with a number to indicate max value', () => {
    const numberedDice = new Dice(10);
    expect(numberedDice.numOutcomes).toBe(10);
    expect(numberedDice.min).toBe(1);
    expect(numberedDice.max).toBe(10);
  });

  test('with an array of numbers', () => {
    const customDice = new Dice([10, 12, 13, 11]);
    expect(customDice.numOutcomes).toBe(4);
    expect(customDice.min).toBe(10);
    expect(customDice.max).toBe(13);
  });
});

describe('Test methods for a default die', () => {
  const defaultDice = new Dice();

  describe('roll:', () => {
    test('default roll returns an array with one number', () => {
      const result = defaultDice.roll();
      expect(Array.isArray(result)).toBe(true);
      expect(result.every((x) => typeof x === "number")).toBe(true);
      expect(result.length).toBe(1);
    });
  
  });
  
  describe('sum:', () => {
    test('the sum of a roll is a number', () => {
      const result = defaultDice.roll();
      const resultSum = Dice.sumRolls(result);
      expect(typeof resultSum).toBe("number");
    });
  });

  describe('order:', () => {
    test('result is an array of the same length as the original', () => {
      const rolls = [1, 1, 2, 4, 5];
      const ogLength = rolls.length;
      const result = Dice.orderRolls(rolls);

      expect(result.length).toBe(ogLength);
      expect(result.every((x) => rolls.indexOf(x) >= 0));
    });
  });

  describe('generatePermutations:', () => {
    test('permutations for 1 roll is just the outcomes', () => {
      const defaultPermutations = defaultDice.rollPermutations(1);
      expect(defaultPermutations.length).toBe(defaultDice.numOutcomes);
    });

    test('permutations for 2 rolls is the number of outcomes ** 2', () => {
      const defaultPermutations = defaultDice.rollPermutations(2);
      expect(defaultPermutations.length).toBe(defaultDice.numOutcomes**2);
    });

    test('permutations for 5 rolls is the number of outcomes ** 5', () => {
      const defaultPermutations = defaultDice.rollPermutations(5);
      expect(defaultPermutations.length).toBe(defaultDice.numOutcomes**5);
    });
  });
});
