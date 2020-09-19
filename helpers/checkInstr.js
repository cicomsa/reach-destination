const init = (data, value, key, errors) => {
  const splitValue = value.split('');
  splitValue.map((val) => {
    if (!data.includes(val)) {
      if (!errors.includes(`"${value}" is incorrect data for the ${key}.`))
        errors.push(`"${value}" is incorrect data for the ${key}.`);
    }
  });

  return errors.length ? errors : 'correctData';
};

module.exports = init;
