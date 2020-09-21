const init = (roverOne, roverTwo) => {
  const joinedRoverOne =
    typeof roverOne === 'string' ? roverOne : roverOne.join(' ');
  const joinedRoverTwo =
    typeof roverTwo === 'string' ? roverTwo : roverTwo.join(' ');
  return `${joinedRoverOne}\n${joinedRoverTwo}`;
};

module.exports = init;
