// function draw(n) {
// let m = 1 ;
// let row = "" ;
//   for (var i = 1 ; i <= n ; i++) {
//     for (var j = 1 ; j <= i ; j++){
//       row += m + " " ;
//       m++;
//     }
//     row += "\n";
//   }
//   return row;
// }
// console.log(draw(5));





function getTotal(N) {
  if (N === 1) {
    return 1;
  } else {
    return 1 / N + getTotal(N - 1);
  }
}

let N = 3;
const result = getTotal(N);
console.log(`Giá trị của biểu thức S là: ${result}`);