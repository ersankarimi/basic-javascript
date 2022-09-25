const isAllArrValuesString = (array) => {
  for (const value of array) {
    if (typeof value !== "string") {
      return false;
    }
  }
  return true;
};

const arrayMap = (array, manipulationValueFunction) => {
  const newAarr = [];
  for (const value of array) {
    newAarr.push(manipulationValueFunction(value));
  }
  return newAarr;
};

const findUniqueString = (array) => {
  if (!isAllArrValuesString(array)) {
    throw new Error("Please make sure all value of array is string");
  }

  const strArrOfCharsValues = arrayMap(array, (arrValue) => {
    return [...new Set([...arrValue.toLowerCase()])].sort().join("");
  });

  for (const value of strArrOfCharsValues) {
    if (
      strArrOfCharsValues.indexOf(value) ===
      strArrOfCharsValues.lastIndexOf(value)
    ) {
      return array[strArrOfCharsValues.indexOf(value)];
    }
  }
};
