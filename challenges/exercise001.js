// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0,1).toUpperCase() + word.substring(1,word.length);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0,1) + "." + lastName.substring(0,1);
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  
  return parseFloat((originalPrice + ((vatRate / 100) * originalPrice)).toFixed(2));
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  
  return parseFloat(
    (originalPrice - ((reduction / 100) * originalPrice)).toFixed(2)
  );
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let position = null;
  let charLength = 2;
  if (str.length % 2 == 1) {
    position = str.length / 2;
    charLength = 1;
  } else {
    position = (str.length / 2) - 1;
  }
  console.log(str.substring(position, position + charLength));
  return str.substring(position, position + charLength);
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return [...word].reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map(word => word.split("").reverse().join(""));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  users.map((usr) => {
    return usr.type === "Linux" ? count++ : count;
  });
  return count;

}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let result = scores.reduce((a, b) => a + b, 0) / scores.length;
  return result%1 === 0 ? result : parseFloat(result.toFixed(2)) ;
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if(n % 3 === 0 && n%5 === 0){
    return "fizzbuzz";
  }
  else if(n % 3 === 0)
  {
    return "fizz";
  }
  else if(n % 5 === 0){
    return "buzz";
  }
  else
  {
    return n;
  }
}
