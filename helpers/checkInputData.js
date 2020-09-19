const checkInstr = require('./checkInstr');
const checkCoords = require('./checkCoords');

const init = (input) => {
  const { plateau_coords, rover_one, rover_two } = input;
  const errors = [];
  const roverInstructions = ['M', 'L', 'R'];
  const roverCoors = ['N', 'S', 'E', 'W'];

  checkCoords(plateau_coords, 'plateau coordinates', errors);
  checkCoords(
    rover_one.initial_position,
    'rover one initial position',
    errors,
    roverCoors
  );
  checkCoords(
    rover_two.initial_position,
    'rover two initial position',
    errors,
    roverCoors
  );
  checkInstr(
    roverInstructions,
    rover_one.instructions,
    'rover one instructions',
    errors
  );
  checkInstr(
    roverInstructions,
    rover_two.instructions,
    'rover two instructions',
    errors
  );

  return errors.length ? errors : 'correctInputData';
};

module.exports = init;
