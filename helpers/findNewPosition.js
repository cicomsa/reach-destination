const findPossibility = require('./findPossibility');
let possibility;

const init = (roverCoords, roverInstructions, position, plateauCoords, i) => {
  if (
    position[0] > plateauCoords[0] ||
    position[1] > plateauCoords[1] ||
    position[0] < 0 ||
    position[1] < 0
  )
    return "Instructions don't match the size of the plateau.";
  if (i === roverInstructions.length) return position;

  possibility = findPossibility(roverCoords, position, roverInstructions[i]);
  return init(
    roverCoords,
    roverInstructions,
    possibility,
    plateauCoords,
    i + 1
  );
};

module.exports = init;
