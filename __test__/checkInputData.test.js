const checkInputData = require('../helpers/checkInputData');

const correctInputTypes = {
  plateau_coords: '5 5',
  rover_one: {
    initial_position: '1 2 N',
    instructions: 'LMLMLMLMM',
    final_position: '',
  },
  rover_two: {
    initial_position: '3 3 E',
    instructions: 'MMRMMRMRRM',
    final_position: '',
  },
};
const resultCorrectInputTypes = 'correctInputData';

const incorrectInputTypes = {
  plateau_coords: '5 5',
  rover_one: {
    initial_position: '1 2 N',
    instructions: 'LMLMLMLMM',
    final_position: '',
  },
  rover_two: {
    initial_position: '3 S E',
    instructions: 'MMRMMRMRRM',
    final_position: '',
  },
};
const resultIncorrectInputTypes = [
  `"3 S E" is incorrect data for the rover two initial position.`,
];

test('Checks the type of input data - returns correct data', () => {
  expect(checkInputData(correctInputTypes)).toEqual(resultCorrectInputTypes);
});
test('Checks the type of input data - returns incorrect data', () => {
  expect(checkInputData(incorrectInputTypes)).toEqual(
    resultIncorrectInputTypes
  );
});
