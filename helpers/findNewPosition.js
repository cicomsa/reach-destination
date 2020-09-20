const findPossibility = require('./findPossibility');
let possibility;

const init = (roverCoords, roverInstructions, position, i) => {
  if (i === roverInstructions.length) {
    return position;
  } else {
    possibility = findPossibility(roverCoords, position, roverInstructions[i]);

    return init(roverCoords, roverInstructions, possibility, i + 1);
  }
};

module.exports = init;
