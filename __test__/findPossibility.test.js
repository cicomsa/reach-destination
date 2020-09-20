const findPossibility = require('../helpers/findPossibility');

const roverCoors = ['N', 'E', 'S', 'W'];
const inputM = 'M';
let initialPosition = [1, 2, 'N'];
const inputR = 'R';
const resultR = [1, 2, 'E'];
const inputL = 'L';
const resultL = [1, 2, 'W'];

beforeEach(() => (initialPosition = [1, 2, 'N']));

test('Returns possible new position - input MN', () => {
  const initialPositionMN = initialPosition;
  const resultMN = [1, 3, 'N'];
  expect(findPossibility(roverCoors, initialPositionMN, inputM)).toEqual(
    resultMN
  );
});
test('Returns possible new position - input MS', () => {
  const initialPositionMS = [1, 2, 'S'];
  resultMS = [1, 1, 'S'];
  expect(findPossibility(roverCoors, initialPositionMS, inputM)).toEqual(
    resultMS
  );
});
test('Returns possible new position - input MW', () => {
  const initialPositionMW = [1, 2, 'W'];
  resultMW = [0, 2, 'W'];
  expect(findPossibility(roverCoors, initialPositionMW, inputM)).toEqual(
    resultMW
  );
});
test('Returns possible new position - input ME', () => {
  const initialPositionME = [1, 2, 'E'];
  resultME = [2, 2, 'E'];
  expect(findPossibility(roverCoors, initialPositionME, inputM)).toEqual(
    resultME
  );
});
test('Returns possible new position - input R', () => {
  expect(findPossibility(roverCoors, initialPosition, inputR)).toEqual(resultR);
});
test('Returns possible new position - input L', () => {
  expect(findPossibility(roverCoors, initialPosition, inputL)).toEqual(resultL);
});
