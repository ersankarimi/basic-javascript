// Find unique string
const isAllArrayValuesString = (array) => {
  return array.every((value) => typeof value === "string");
};
const findUniqueString = (array) => {
  try {
    if (isAllArrayValuesString(array)) {
      const arrayStringOfAllCharacters = array.map((value) => {
        return [...new Set([...value.toLowerCase()])].sort().join("");
      });

      const uniqueStringIndex = arrayStringOfAllCharacters.findIndex(
        (value) =>
          arrayStringOfAllCharacters.indexOf(value) ===
          arrayStringOfAllCharacters.lastIndexOf(value)
      );

      return array[uniqueStringIndex];
    }

    throw new Error(
      "Please make sure all values of array is string data type!"
    );
  } catch (error) {
    throw new Error(error.message);
  }
};
