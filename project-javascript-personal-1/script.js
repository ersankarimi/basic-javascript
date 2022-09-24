// Find uniqe value of array (string or number)
const findUniqValue = (array, type) => {
	if (type !== "number" && type !== "string") return;

	if (type === "number") {
		return array.filter(
			(num) => array.indexOf(num) === array.lastIndexOf(num)
		)[0];
	}
	const strArrOfCharsValue = array.map((str) =>
		[...new Set([...str.toLowerCase()])].sort().join("")
	);

	const uniqeValueIndex = strArrOfCharsValue.findIndex(
		(value, _, strArr) =>
			strArr.indexOf(value) === strArr.lastIndexOf(value)
	);

	return array[uniqeValueIndex];
};
