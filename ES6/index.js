function func(a){
    var a = 2;
    return a;
}

func.get = function(a){
    return func();
}

console.log(func.get(1));