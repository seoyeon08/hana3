// 1
for(let i = 0.1; i < 1; i = i + 0.1) {
    let v = i.toFixed(1)
    console.log(parseFloat(v));
}

// console.log(Number(i.toFixed(1)));
// 또는
// console.log(+i.toFixed(1))
// 도 가능하다.