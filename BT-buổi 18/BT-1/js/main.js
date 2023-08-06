var textColor = 
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, animi!" ;

var split1 = textColor.split(" ");

var split2 = textColor.split(" ") ;

// console.log(split2);

var i = 0 ;

let displayText = function () {
    setInterval (function() {
        split1[i] =`<span>${split1[i]}</span>` ;
        textColor = split1.join(" ");
        document.getElementById("text").innerHTML = textColor ;
        split1[i] = split2[i];

        i++;

        if (i >= split1.length) { 
            i = 0 ;
        }

    }, 1000)
};

displayText();

