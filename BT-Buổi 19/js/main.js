// bài tập 1

var numbers = [2, 2 , 20 ,7] ;

var maxNumber = numbers[0]
var minNumber = numbers[0]
for (var i = 0 ; i <= numbers.length ; i++) {
    if (numbers[i] > maxNumber) {
     maxNumber =numbers[i] ;
     var index = i ;
    }

    else if(numbers[i] < minNumber ) {
        minNumber = numbers[i] ;
     var   indexMin = i ;

    }

}

console.log(`${maxNumber} là số lớn nhất ở vị trí ${index}`);

console.log(`${minNumber} là số bé nhất ở vị trí ${indexMin}`);


// bài tập 2

var myArray = [0, 6 , 6, 8] ;
var s = 0
var key = 0


for (var i = 0 ; i <= myArray.length ; i++) {
    var result = true ;

  if (myArray[i] >= 2) {
      for (var j =2 ; j < myArray[i] ; j++) {
         if (myArray[i] % j === 0) {
             result = false ;
        }              
    }
    if (result) {
        key ++
        s += myArray[i] ;      
                } 
}

}

if ( s !== 0)
console.log(`trung bình các số nguyên tố là ${s} / ${key}`) ;

else console.log(` không có số nguyên tố`);


// bài 3 

// function filterArray(arr) {
//     if (arr.length === 0) return "Mảng rỗng";
//     var newArray = [];
//     for (var i in arr) {
//         if (!newArray.includes(arr[i])) {
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;    
    
    
// }

// // var array = [1, 3, 3, 5, 7, 1, 3, 5, 7];
// console.log(filterArray(array));


// bài 4 

var myNumbers = [5, 1, 9, 8, 10]; 

var element = 4 ;

var ascending = myNumbers.sort(function(a , b){
    if (b > a) {
        return -1
    }
}) 

for (var i = 0 ; i <= ascending.length ; i++) {
    if (element < ascending[i]) {
        ascending.splice(i,0,element)
        break ;
        
    }
}

console.log(ascending);
