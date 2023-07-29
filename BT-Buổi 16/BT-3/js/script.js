var  a =20
var b = 10
var c = 30


if(a > b) {
    if (b > c) {
        console.log("a là số lớn nhất");
    }

    else {
        if (a > c) {
            console.log("a là số lớn nhất");
        }

        else {
            console.log("c là số lớn nhất");
        }
    }
}

else {
    if(b > c) {
        console.log("b là số lớn nhất");
    }

    else {
        console.log("c là số lớn nhất");
    }
}