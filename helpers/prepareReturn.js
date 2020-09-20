const init = (roverOne, roverTwo) => {
  const joinedRoverOne = roverOne.join(' ');
  const joinedRoverTwo = roverTwo.join(' ');
  return `${joinedRoverOne}\n${joinedRoverTwo}`;
};

module.exports = init;
