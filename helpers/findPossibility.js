const init = (roverCoors, initialPosition, input) => {
  const indexHeading = roverCoors.indexOf(initialPosition[2]);

  switch (input) {
    case 'M':
      return [initialPosition[0], initialPosition[1] + 1, initialPosition[2]];
    case 'R':
      const newHeadingR = roverCoors[indexHeading + 1]
        ? roverCoors[indexHeading + 1]
        : roverCoors[0];
      return [initialPosition[0], initialPosition[1], newHeadingR];
    case 'L':
      const newHeadingL = roverCoors[indexHeading - 1]
        ? roverCoors[indexHeading - 1]
        : roverCoors[roverCoors.length - 1];
      return [initialPosition[0], initialPosition[1], newHeadingL];
  }
};

module.exports = init;