// Bài tập 1

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var newArr = [];

var newArr = arrA.reduce(function (prev, current) {
  if (arrB.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);

console.log(newArr);

// Bài tập 2

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

flaArray = function (arr) {
  var newArr = arr.reduce(function (prev, current) {
    if (!Array.isArray(current)) {
      return prev.concat(current);
    }
    return prev.concat(flaArray(current));
  }, []);

  return newArr;
};

console.log(flaArray(arr));

// Bài tập 3

var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var arrType = function (arr) {
  var newArr = arr.reduce(function (prev, current) {
    var myArr = prev.concat(current);
    if (myArr.length !== 0) {
      return myArr;
    }
  }, []);
  var result = [[], [], [], [], [], []];
  for (var i = 0; i < newArr.length; i++) {
    if (typeof newArr[i] === "number") {
      result[0].push(newArr[i]);
    } else if (typeof newArr[i] === "boolean") {
      result[1].push(newArr[i]);
    } else if (typeof newArr[i] === "string") {
      result[2].push(newArr[i]);
    } else if (typeof (newArr[i] === "null" && newArr[i] === "undefined")) {
      prev[3].push(newArr[i]);
    } else if (typeof newArr[i] === "function") {
      prev[4].push(newArr[i]);
    } else {
      prev[5].push(newArr[i]);
    }
  }

  return result;
};

console.log(arrType(arr));
