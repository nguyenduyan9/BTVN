
function getElement(m ) {
 
        for(var i =2 ; i < m  ; i++ ) {
            if ( m % i === 0) {
                return false 
            }

            return true
        }   
}

var m =4;

if ( m <= 1) {
    console.log(`${m} không phải số nguyên tố`);
}

else if (m <= 2) {
    console.log(`${m} là số nguyên tố`);
    
}

else {
    if (getElement(m)) {
        console.log(`${m} là số nguyên tố`);
    }

    else {
        console.log(`${m} không phải là số nguyên tố`);

    }
}




