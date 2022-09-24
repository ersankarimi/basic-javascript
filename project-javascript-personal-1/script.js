// Find uniqe value of array (string or number)
const findUniqValue = (array, type) => {
	if (type !== "number" && type !== "string") return;

	if (type === "number") {
		return array.filter(
			(num) => array.indexOf(num) === array.lastIndexOf(num)
		)[0];
	}
	const arrOfChars = array.map((str) =>
		[...new Set([...str.toLowerCase()])].sort().join("")
	);

	const uniqeValueIndex = arrOfChars.findIndex(
		(value, _, strArr) =>
			strArr.indexOf(value) === strArr.lastIndexOf(value)
	);

	return array[uniqeValueIndex];
};

console.log(
	findUniqValue(
		["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"],
		"string"
	)
);
