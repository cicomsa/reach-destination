const checkCoords = require('../helpers/checkCoords');

let errors = [];
const roverCoors = ['N', 'S', 'E', 'W'];
const correctPlateauCoordsValues = '5 5';
const correctPlateauCoordsResults = 'correctData';
const incorrectPlateauCoordsValues = '5 S';
const incorrectPlateauCoordsResults = [
  '"5 S" is incorrect data for the plateau coordinates.',
];
const correctRoverCoordsValues = '1 3 S';
const correctRoverCoordsResults = 'correctData';
const incorrectRoverCoordsValues = '5 S F';
const incorrectRoverCoordsResults = [
  '"5 S F" is incorrect data for the rover one initial position.',
];

beforeEach(() => (errors = []));

test('Checks if the plateau coordinates includes the correct data type of values -  returns true', () => {
  expect(
    checkCoords(correctPlateauCoordsValues, 'plateau coordinates', errors)
  ).toEqual(correctPlateauCoordsResults);
});
test('Checks if the plateau coordinates includes the correct data type of values -  returns false', () => {
  expect(
    checkCoords(incorrectPlateauCoordsValues, 'plateau coordinates', errors)
  ).toEqual(incorrectPlateauCoordsResults);
});

test('Checks if the rover initial position includes the correct data type of values -  returns true', () => {
  expect(
    checkCoords(
      correctRoverCoordsValues,
      'rover one initial position',
      errors,
      roverCoors
    )
  ).toEqual(correctRoverCoordsResults);
});
test('Checks if the rover initial position includes the correct data type of values -  returns false', () => {
  expect(
    checkCoords(
      incorrectRoverCoordsValues,
      'rover one initial position',
      errors,
      roverCoors
    )
  ).toEqual(incorrectRoverCoordsResults);
});
