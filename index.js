const prepareData = require('./helpers/prepareData');
const checkInputData = require('./helpers/checkInputData');

const init = (input) => {
  const preparedData = prepareData(input);
  const inputDataCheck = checkInputData(preparedData);

  if (inputDataCheck !== 'correctInputData') return 'incorrectInputData';

  return input;
};

module.exports = init;
