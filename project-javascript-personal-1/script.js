// Find uniqe value of array (string or number)
const findUniqValue = (array, type) => {
  if (type !== "number" && type !== "string") {
    throw new Error(
      "Enter parameters type with a value between number or string"
    );
  }

  if (array.length < 3) {
    throw new Error("Please enter the number of array values of at least 3");
  }

  if (type === "number") {
    return array.filter(
      (num) => array.indexOf(num) === array.lastIndexOf(num)
    )[0];
  }

  const strArrOfCharsValues = array.map((str) =>
    [...new Set([...str.toLowerCase()])].sort().join("")
  );

  const uniqeValueIndex = strArrOfCharsValues.findIndex(
    (value, _, strArr) => strArr.indexOf(value) === strArr.lastIndexOf(value)
  );

  return array[uniqeValueIndex];
};
