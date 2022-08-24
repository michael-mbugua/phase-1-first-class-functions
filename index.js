function callback() {
    console.log("Hello Mokua");
}

function receivesAFunction(callback){
    callback()
}

var namedSum = function sum (a, b) { 
    return a + b;
}

function returnsANamedFunction(){
    return namedSum
}


function returnsAnAnonymousFunction(){
    return num1 => num1 ++;
}
