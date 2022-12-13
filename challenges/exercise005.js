export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let nextNumIdx = -1;
  if(nums.indexOf(n) != -1)
  {
    nextNumIdx  = nums.indexOf(n) + 1;
  }
  return nums[nextNumIdx] ? nums[nextNumIdx] : null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  let noOfOnes = str.match(/1/g).length;
  let noOfZeros = str.length - noOfOnes;
  return {1 : noOfOnes, 0 : noOfZeros}; 
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  const mergedArr = [].concat(...arrs);
  return mergedArr.reduce((a,b) => a+b);
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  const arrValue = Object.values(haystack);
  let hasSearchTerm = false;
  arrValue.forEach((val) => {
    if(JSON.stringify(val).toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) hasSearchTerm = true;
  });
  return hasSearchTerm;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  let wordFrequencies = {};
  const newStrArr = str.replace(/[^a-zA-Z ]/g, "").split(" ");
  newStrArr.forEach(function (word, i, arr) {
    wordFrequencies[word.toLowerCase()] = wordFrequencies[word.toLowerCase()] ? ++wordFrequencies[word.toLowerCase()] : 1;
  });
  return wordFrequencies;
};
