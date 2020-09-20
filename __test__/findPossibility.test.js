const findPossibility = require('../helpers/findPossibility');

const roverCoors = ['N', 'E', 'S', 'W'];
let initialPosition = [1, 2, 'N'];
const inputM = 'M';
const resultM = [1, 3, 'N'];
const inputR = 'R';
const resultR = [1, 2, 'E'];
const inputL = 'L';
const resultL = [1, 2, 'W'];

beforeEach(() => (initialPosition = [1, 2, 'N']));

test('Returns possible new position - input M', () => {
  expect(findPossibility(roverCoors, initialPosition, inputM)).toEqual(resultM);
});
test('Returns possible new position - input R', () => {
  expect(findPossibility(roverCoors, initialPosition, inputR)).toEqual(resultR);
});
test('Returns possible new position - input L', () => {
  expect(findPossibility(roverCoors, initialPosition, inputL)).toEqual(resultL);
});
