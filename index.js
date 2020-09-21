const prepareData = require('./helpers/prepareData');
const checkInputData = require('./helpers/checkInputData');
const convertData = require('./helpers/convertData');
const findNewPosition = require('./helpers/findNewPosition');
const prepareReturn = require('./helpers/prepareReturn');

const init = (input) => {
  const roverCoords = ['N', 'E', 'S', 'W'];
  const preparedData = prepareData(input);
  const inputDataCheck = checkInputData(preparedData);

  if (inputDataCheck !== 'correctInputData') return 'incorrectInputData';

  const convertedData = convertData(preparedData);
  convertedData.rover_one.final_position = findNewPosition(
    roverCoords,
    convertedData.rover_one.instructions,
    convertedData.rover_one.initial_position,
    roverCoords,
    0
  );
  convertedData.rover_two.final_position = findNewPosition(
    roverCoords,
    convertedData.rover_two.instructions,
    convertedData.rover_two.initial_position,
    roverCoords,
    0
  );

  const finalPositions = prepareReturn(
    convertedData.rover_one.final_position,
    convertedData.rover_two.final_position
  );

  return finalPositions;
};

module.exports = init;
