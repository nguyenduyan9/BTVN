var n = 5 ;
var subTotal = 1 ;
var total = 0 ;

for (i = 1 ; i <= 6 ; i++) {
    subTotal = i * (i + 1)
    total += subTotal
    console.log(` tổng s = ${total}`);
}