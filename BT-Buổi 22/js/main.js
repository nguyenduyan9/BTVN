// Bài tập I
var result = 0 ;
var total =function (...args) {
   for(var i =0 ; i < args.length ; i++) {
   if (  !isNaN(args[i]) && args[i] !== Infinity){
   result += +args[i]
}else{
    console.log("không xác định");
    break

}
}
return result

}

console.log(total("a","2","2"));


// Bài tập 2

var price = ['120000000'];



getCurrency = function (vnd) {
  var  arrPrice = price.toString().split("");
   for (var i = arrPrice.length-1  ; i >=0 ; i -= 3) {
    if ( i === arrPrice.length-1) {
        continue
    }else {{
        arrPrice[i] += ","
    }}
   }
   var result = arrPrice.join("") + vnd
   return result
}

console.log(getCurrency("đ"));


// Bài tập 3

var arr = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

var newArr = [];

myNested = function(arr) {

    arr.forEach(function(item){
        item.children = [] ;
       if (item.parent === 0 ) {
           newArr.push(item)
       }
    
       else {
        var  newArr1 = arr.find(function(item2){              
             return item2.id === item.parent
             
           });
           if (newArr1) {

            newArr1.children.push(item)
            // console.log(newArr1);
           }
       }

    }) 

    return newArr
}

console.log(myNested(arr));


// Bài 4

var arr1 = [1,2,3,4]

var arr2 = arr1.reduce(function(prev,current){
    return prev + current 
},0);

console.log(arr2);



 Array.prototype.reduce2 = function (prev,current) {
    
}

    
