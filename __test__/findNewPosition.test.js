const findNewPosition = require('../helpers/findNewPosition');

const roverCoords = ['N', 'E', 'S', 'W'];
const firstRoverPosition = [1, 2, 'N'];
const firstRoverInstructions = 'LMLMLMLMM';
const firstRoverResult = [1, 3, 'N'];
const secondRoverPosition = [3, 3, 'E'];
const secondRoverInstructions = 'MMRMMRMRRM';
const secondRoverResult = [5, 1, 'E'];

test('Returns the new position of the first rover', () => {
  expect(
    findNewPosition(roverCoords, firstRoverInstructions, firstRoverPosition, 0)
  ).toEqual(firstRoverResult);
});
test('Returns the new position of the second rover', () => {
  expect(
    findNewPosition(
      roverCoords,
      secondRoverInstructions,
      secondRoverPosition,
      0
    )
  ).toEqual(secondRoverResult);
});
