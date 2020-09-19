const checkInstr = require('../helpers/checkInstr');

let errors = [];
const roverInstructions = ['M', 'L', 'R'];
const correctRoverInstrValues = 'MRLMM';
const correctRoverInstrResults = 'correctData';
const incorrectRoverInstrValues = 'MRTW';
const incorrectRoverInstrResults = [
  '"MRTW" is incorrect data for the rover one instructions.',
];

beforeEach(() => (errors = []));

test('Checks if the rover instructions includes the correct data type of values -  returns true', () => {
  expect(
    checkInstr(
      roverInstructions,
      correctRoverInstrValues,
      'rover one instructions',
      errors
    )
  ).toEqual(correctRoverInstrResults);
});
test('Checks if the rover instructions includes the correct data type of values -  returns false', () => {
  expect(
    checkInstr(
      roverInstructions,
      incorrectRoverInstrValues,
      'rover one instructions',
      errors
    )
  ).toEqual(incorrectRoverInstrResults);
});
