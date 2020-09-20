const logic = require('../index');

const input = '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM';
const result = '1 3 N\n5 1 E';

test('Returns the result of logic function', () => {
  expect(logic(input)).toEqual(result);
});
