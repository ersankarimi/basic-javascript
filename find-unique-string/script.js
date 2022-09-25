const isAllArrayValuesString = (array) => {
  for (const value of array) {
    if (typeof value !== "string") {
      return false;
    }
  }
  return true;
};

const arrayMap = (array, manipulationValueFunction) => {
  const newArray = [];
  for (const value of array) {
    newArray.push(manipulationValueFunction(value));
  }
  return newArray;
};

const findUniqueString = (array) => {
  if (!isAllArrayValuesString(array)) {
    throw new Error("Please make sure all value of array is string");
  }

  const strArrOfCharsValues = arrayMap(array, (arrayValue) => {
    return [...new Set([...arrayValue.toLowerCase()])].sort().join("");
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
