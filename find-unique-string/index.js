// Find unique string
const isAllArrayValuesString = (array) => {
  return array.every((value) => typeof value === "string");
};

const findUniqueString = (array) => {
  try {
    if (!array?.length) {
      throw new Error("Please pass an array to the parameter");
    }
    if (array?.length < 3) {
      throw new Error("Please pass an array with at least 3 items");
    }
    if (!isAllArrayValuesString(array)) {
      throw new Error(
        "Please make sure all values of array is string data type"
      );
    }

    const arrayStringOfAllCharacters = array.map((value) => {
      return [...new Set([...value.toLowerCase()])].sort().join("");
    });

    const uniqueStringIndex = arrayStringOfAllCharacters.findIndex(
      (value) =>
        arrayStringOfAllCharacters.indexOf(value) ===
        arrayStringOfAllCharacters.lastIndexOf(value)
    );

    return array[uniqueStringIndex];
  } catch (error) {
    console.error(error);
  }
};

const testCases = () => {
  console.assert(findUniqueString(), "failed");
  console.assert(findUniqueString([]), "failed");
  console.assert(findUniqueString([1, 2, 3]), "failed");
};
