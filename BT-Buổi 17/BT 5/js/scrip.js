function draw(n) {
let n = 1;
let row = " " ;
  for (var i = 1 ; i <= n ; i++) {
    for (var j = 1 ; j <= i ; j++){
      row += j + " " ;
      j++
    }
  }
  return draw
}

console.log(draw(5));