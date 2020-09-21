const findNewPosition = require('../helpers/findNewPosition');

const roverCoords = ['N', 'E', 'S', 'W'];
const firstRoverPosition = [1, 2, 'N'];
const firstRoverInstructions = 'LMLMLMLMM';
const firstRoverResult = [1, 3, 'N'];
const secondRoverPosition = [3, 3, 'E'];
const secondRoverInstructions = 'MMRMMRMRRM';
const secondRoverResult = [5, 1, 'E'];
const plateauCoords = [5, 5];
const thirdRoverPosition = [1, 2, 'S'];
const thirdRoverInstructions = 'MMMLRM';
const thirdRoverResult = "Instructions don't match the size of the plateau.";
const fourthRoverPosition = [1, 3, 'N'];
const fourthRoverInstructions = 'MMMLRM';
const fourthRoverResult = "Instructions don't match the size of the plateau.";

test('Returns the new position of the first rover', () => {
  expect(
    findNewPosition(
      roverCoords,
      firstRoverInstructions,
      firstRoverPosition,
      plateauCoords,
      0
    )
  ).toEqual(firstRoverResult);
});
test('Returns the new position of the second rover', () => {
  expect(
    findNewPosition(
      roverCoords,
      secondRoverInstructions,
      secondRoverPosition,
      plateauCoords,
      0
    )
  ).toEqual(secondRoverResult);
});
test('Returns the new position of the third rover - failure lowerCoords', () => {
  expect(
    findNewPosition(
      roverCoords,
      thirdRoverInstructions,
      thirdRoverPosition,
      plateauCoords,
      0
    )
  ).toEqual(thirdRoverResult);
});
test('Returns the new position of the third rover - failure higerCoords', () => {
  expect(
    findNewPosition(
      roverCoords,
      fourthRoverInstructions,
      fourthRoverPosition,
      plateauCoords,
      0
    )
  ).toEqual(fourthRoverResult);
});
