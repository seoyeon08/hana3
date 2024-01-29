// hoisting
var gg;
let bb;
function f1(x,y){
    var gg;
    let bb;
    var zz;
    function f2; // undefined
    function f2(t, u) { console.log(t, 'inner', xx, zz); }  // f1 평가 시 f1 상단에 <f.o>로 hoisting
    function f2(t, u, v) { console.log(t, 'inner2', xx, zz); } // hoisting 시, 위 라인의 f2를 덮어씀!
    var zz;
// -----------------------------------------
    var gg = 11;   let bb = 22;
    console.log('f1>', gg, bb, zz, f2, f2.length); // 3
    f2('first'); // t,u,v 실행 (이 시점에 nested f2는 hoisting됐지만 <f.o>로 정의되지 않은 상태!) ← inner2
    { 
    function f2(t) { console.log(t, 'nested', xx, zz); }  // hoisting은 undefined로?!
      const xx; // f1 평가 시 xx는 notInitializedYet(uninitialized) 상태로 block상단에 hoisting.
      let lll;
      xx = 99;
      f2('nest-first'); // no error? which call f2(inner) or f2(nested) ?
      var zz = 88;   // f1 평가 시 f1 상단에 undefined로 hoisting.
      let lll = 0;   // hoisting되는 이유는 뒤에서 선언했는지 여부를 개발자에게 알려줘야 중복 선언 안함!
    }  // 평가시점에 f1 scope로 hoisting.
    var zz = 800;
    f2('second');  // which call 'nested' or 'inner' or 'inner2' ? 
}

function f2(g){
    console.log(g, 'global f2>', gg, bb, xx, kk); // ?
}

let xx;
var kk;

//
gg = 1;
bb = 2;

xx = 9;
if (gg > 0){const yy; kk = 33; yy = 0;}
f1(1, 2);
console.log(kk, yy);

f2('third');    // global f2 실행