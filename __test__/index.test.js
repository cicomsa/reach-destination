const logic = require('../index');

const string = 'hello test';
const result = 'hello test';

test('Returns the result of logic function', () => {
  expect(logic(string)).toEqual(result);
});
