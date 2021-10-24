const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const unitsGenerator = (totalUnitAmount = 167) => {
  const defaultUnits = {
    Spearmen: 0,
    Swordsmen: 0,
    Archers: 0,
  };

  let unitLength = Object.keys(defaultUnits).length;

  for (let unit in defaultUnits) {
    //when last unit then set rest of units amount as value
    if (unitLength === 1) {
      defaultUnits[unit] = totalUnitAmount;
      break;
    }

    const maxAmount =
      totalUnitAmount > unitLength ? totalUnitAmount - unitLength : unitLength;

    const generatedRandomAmount = randomNumber(1, maxAmount);

    unitLength = unitLength - 1;

    //reduce total unit amount by random number
    totalUnitAmount = totalUnitAmount - generatedRandomAmount;

    defaultUnits[unit] = generatedRandomAmount;
  }

  return defaultUnits;
};
