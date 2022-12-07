export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(n => n < 1);
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(name => name.substring(0,1).indexOf(char) > -1);
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbs =  words.filter((word) => findVerb(word));
  function findVerb(word){
    if(word.split(" ").length > 1) {
      return word.split(" ")[0].indexOf("to") > -1;
    }
  }
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const result = nums.filter(num => getInteger(num));
  function getInteger(num){
    if(Number.isInteger(num)){
      return num;
    }
  }
  return result;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(user => user.data.city.displayName);
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map((num) =>
    Math.sqrt(num) % 1 !== 0
      ? parseFloat(Math.sqrt(num).toFixed(2))
      : Math.sqrt(num)
  );
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter((sentence) => sentence.toLowerCase().includes(str.toLowerCase()));
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(sides => Math.max.apply(null, sides));
}
