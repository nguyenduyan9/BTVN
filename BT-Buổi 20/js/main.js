// BT 1

// var arrA = [1, 4, 3, 2];

// console.log(arrA.includes(4));

// var arrB = [5, 2, 6, 7, 1 ];


// var arr = arrB.reduce(function(prev,curren){
// if (arrA.includes(curren)) {
//      prev.push(curren)
// }

// return prev
// },[])

// console.log(arr);


//  BT 2 

// var arr = [0, 1, [2,3], [4,5,[6,7]],[8,[9,10,[11,12]]]]


// if (Array.isArray(arr)) {
//     function newArr(arr){
//         return arr.reduce(function(prev,current){
//             return prev.concat(
//                 Array.isArray(current) ? newArr(current) : current
//             ) ;
//         },[])
//     }
// }

// console.log(newArr(arr));

//  BT 3

var arr = [["a", 1 ,true],["b", 2, false]]

function Newarr (arr) {
 return arr.reduce(function(prev,current){
        return prev.concat(current)       
    },[])
}

// console.log(Newarr(arr));


var newArr = Newarr(arr);

var re



