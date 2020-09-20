const prepareReturn = require('../helpers/prepareReturn');

const roverOne = [5, 1, 'E'];
const roverTwo = [1, 3, 'N'];
const result = '5 1 E\n1 3 N';

test('Returns the result of logic function', () => {
  expect(prepareReturn(roverOne, roverTwo)).toEqual(result);
});
