//Task
//Your task is to find the first element of an array that is not consecutive.

//Solutions.
function firstNonConsecutive(arr) {
  const result = arr.find((number, index) => number !== index + arr[0]);
  return Number.isInteger(result) ? result : null;
}
