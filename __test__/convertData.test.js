const convertData = require('../helpers/convertData');

const input = {
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
const result = {
  plateau_coords: [5, 5],
  rover_one: {
    initial_position: [1, 2, 'N'],
    instructions: 'LMLMLMLMM',
    final_position: '',
  },
  rover_two: {
    initial_position: [3, 3, 'E'],
    instructions: 'MMRMMRMRRM',
    final_position: '',
  },
};

test('Checks if the convertData function returns expected result', () => {
  expect(convertData(input)).toEqual(result);
});
