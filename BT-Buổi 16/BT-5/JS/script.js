var a= 6;
var b= 9;
var c= 8;

if(a > b) {
    if(b > c) {
        console.log("c, b , a");
    }

    else {
        if(a > c) {
            console.log("b , c , a");
        }

        else {
            console.log("b , a , c");
        }
    }
}
else {
    if(a > c) {
        console.log("c , a ,b");
    }

    else {
        if(b > c) {
            console.log("a , c , b");
        }
        else {
            console.log("a, b ,c");
        }
    }
}