const init = (roverCoords, initialPosition, input) => {
  const indexHeading = roverCoords.indexOf(initialPosition[2]);

  switch (input) {
    case 'M':
      switch (initialPosition[2]) {
        case 'N':
          return [
            initialPosition[0],
            initialPosition[1] + 1,
            initialPosition[2],
          ];
        case 'S':
          return [
            initialPosition[0],
            initialPosition[1] - 1,
            initialPosition[2],
          ];
        case 'E':
          return [
            initialPosition[0] + 1,
            initialPosition[1],
            initialPosition[2],
          ];
        case 'W':
          return [
            initialPosition[0] - 1,
            initialPosition[1],
            initialPosition[2],
          ];
      }
    case 'R':
      const newHeadingR = roverCoords[indexHeading + 1]
        ? roverCoords[indexHeading + 1]
        : roverCoords[0];
      return [initialPosition[0], initialPosition[1], newHeadingR];
    case 'L':
      const newHeadingL = roverCoords[indexHeading - 1]
        ? roverCoords[indexHeading - 1]
        : roverCoords[roverCoords.length - 1];
      return [initialPosition[0], initialPosition[1], newHeadingL];
  }
};

module.exports = init;
