var price
var i = 121 ;
var length ;

function getPrice(a) {
    price = i * a * 1000 ;
    return price ;
}

if (i > 0 && i <= 1) {
    price = i * 15000;
}

else if (i > 1 && i <= 5) {
    
    price =15000 + 13500 * ( i - 1 );
}

else if (5 > 1 && i <= 120) {
   
    price = 15000 + 4*13500 + 11000 * ( i - 5 )
}

else {
    price = (15000 + 4*13500 + 11000 * ( i - 5 ))*0.9
}
console.log(`${price}đ`);