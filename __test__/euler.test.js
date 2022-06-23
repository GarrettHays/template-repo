import Euler from './../src/euler.js';

describe('Euler', () => {
  let reusableEuler;

  beforeEach (() => {
    reusableEuler = new Euler(999);
  });

  test('should correctly determine if number is over 1000', () => {
    expect(reusableEuler.over1k()).toEqual(false);
  });

  test('should correctly determine if number is under 1000', () => {
    reusableEuler.number = 1001;
    expect(reusableEuler.over1k()).toEqual(true);
  });

  test('should correctly determine if number is a multiple of 3', () => {
    expect(reusableEuler.mult3(999)).toEqual(true);
    expect(reusableEuler.mult3(1001)).toEqual(false);
  });

  test('should correctly determine if number is a multiple of 5', () => {
    expect(reusableEuler.mult5(999)).toEqual(false);
    expect(reusableEuler.mult5(1000)).toEqual(true);
  });

  test('should return 23 if eulers number is 10', () => {
    reusableEuler.number = 10;
    expect(reusableEuler.problem01()).toEqual(23);
  });
});