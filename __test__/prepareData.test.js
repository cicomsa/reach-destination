const prepareData = require('../helpers/prepareData');

const input = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';
const result = {
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

test('Checks if the prepareData function returns expected result', () => {
  expect(prepareData(input)).toEqual(result);
});
