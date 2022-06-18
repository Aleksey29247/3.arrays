function compareArrays(arr1, arr2) {
  let result;
  // Ваш код
  /*if (arr1.length === arr2.length)
    for (i = 0; i < arr1.length; i++)
      if (arr1[i] === arr2[i])
        result = true;
      else {
        result = false;
        break;
      }
  else
    result = false*/
  result = arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  let result = arr.filter(isBigEnough).filter(devNum).map((num) => num * 10)
  //let a = arr.filter(isBigEnough);
  //let b = a.filter(devNum);
  //resultArr = b.map((num) => num * 10);
  resultArr = result;
  return resultArr; // array
}
function devNum(value) {
  if (value % 3 === 0) {
    return value;
  }
}

function isBigEnough(value) {
  return value >= 0;
}
