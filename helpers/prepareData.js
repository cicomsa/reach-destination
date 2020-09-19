const init = (input) => {
  const splitInput = input.split('/n');
  const data = {
    plateau_coords: splitInput[0],
    rover_one: {
      initial_position: splitInput[1],
      instructions: splitInput[2],
      final_position: '',
    },
    rover_two: {
      initial_position: splitInput[3],
      instructions: splitInput[4],
      final_position: '',
    },
  };

  return data;
};

module.exports = init;
