function hello(name){
    console.log(`Hello, ${name}!`);
    return(`Hello, ${name}!`);
}


hello('Hong');
const hi = hello;   // 주소 복사.
hi('Kim');
console.log('>>', hi.length, hi.name);

function printFnReturnValue(fn, nm){
    console.log(fn.name, fn.name, fn(nm));
}

printFnReturnValue(hi, 'Lee');
