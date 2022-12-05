export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  console.log(nums.map((num) => num * num));
  return nums.map((num) => num * num);;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let result = words[0].toLowerCase();
  words.map(function (word, index) {
    if (index != 0) {
      result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });
  return result;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let totalSubjects = 0;
  people.forEach(element => {
    totalSubjects = totalSubjects + element.subjects.length;
  });
  return totalSubjects;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let hasIngredient = false;
  menu.forEach(list => {
    list.ingredients.forEach(item => {
      if(item.includes(ingredient)){
        hasIngredient = true;
      }
    })
  });
  return hasIngredient;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let sortedArr1 = arr1.sort();
  let sortedArr2 = arr2.sort();
  let common = [];
  let arr1Idx = 0;
  let arr2Idx = 0;

  while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
      if (sortedArr1[arr1Idx] === sortedArr2[arr2Idx]) {
        common.push(sortedArr1[arr1Idx]);
        arr1Idx++;
        arr2Idx++;
      } else if (sortedArr1[arr1Idx] < sortedArr2[arr2Idx]) {
        arr1Idx++;
      } else {
        arr2Idx++;
      }
    }
    return common;
  
}
