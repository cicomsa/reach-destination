const init = (input) => {
  const convertData = (data) =>
    data.split(' ').map((el) => (isNaN(el) ? el : Number(el)));

  input.plateau_coords = convertData(input.plateau_coords);
  input.rover_one.initial_position = convertData(
    input.rover_one.initial_position
  );
  input.rover_two.initial_position = convertData(
    input.rover_two.initial_position
  );

  console.log(input);

  return input;
};

module.exports = init;
