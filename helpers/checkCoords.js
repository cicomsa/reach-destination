const init = (value, key, errors, data) => {
  const splitValue = value.split(' ');

  splitValue.map((el, i) => {
    if (i === 0 || i === 1) {
      if (/[0-9]+/.test(el) === false) {
        if (!errors.includes(`"${value}" is incorrect data for the ${key}.`))
          errors.push(`"${value}" is incorrect data for the ${key}.`);
      }
    }

    if (i === 2) {
      if (!data.includes(el)) {
        if (!errors.includes(`"${value}" is incorrect data for the ${key}.`))
          errors.push(`"${value}" is incorrect data for the ${key}.`);
      }
    }
  });

  return errors.length ? errors : 'correctData';
};

module.exports = init;
