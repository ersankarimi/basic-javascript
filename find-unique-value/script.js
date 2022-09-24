const array = ["aa", "AA", "bb", "aa"];
const type = "string";

// Make sure all the items in the array have the same data type

// Find uniqe value of array (string or number)
if (type !== "number" && type !== "string") {
  throw new Error(
    "Enter parameters type with a value between number or string"
  );
}

if (array.length < 3) {
  throw new Error("Please enter the number of array values of at least 3");
}

if (type === "number") {
  return array.find((num) => array.indexOf(num) === array.lastIndexOf(num));
}

const strArrOfCharsValues = array.map((str) =>
  [...new Set([...str.toLowerCase()])].sort().join("")
);

const uniqeValueIndex = strArrOfCharsValues.findIndex(
  (value, _, strArr) => strArr.indexOf(value) === strArr.lastIndexOf(value)
);

uniqeValueIndex !== -1 ? array[uniqeValueIndex] : "There is no unique string";
