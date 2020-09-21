const prepareReturn = require('../helpers/prepareReturn');

const roverOne = [5, 1, 'E'];
const roverTwo = [1, 3, 'N'];
const result = '5 1 E\n1 3 N';
const roverOneWithFailure = "Instructions don't match the size of the plateau.";
const resultWithFailure =
  "Instructions don't match the size of the plateau.\n1 3 N";

test('Returns the result of logic function', () => {
  expect(prepareReturn(roverOne, roverTwo)).toEqual(result);
});
test('Returns the result of logic function - failure case', () => {
  expect(prepareReturn(roverOneWithFailure, roverTwo)).toEqual(
    resultWithFailure
  );
});
