function fibo (n) {
    const d = [];
    for (let i = 0; i <= n; i+=1){
        if(i < 2)
            d.push(i);
        else {
            d.push(d[n-1] + d[n-2]);
        }
    }
    return d[n];
}
// ---------------------------------------

const d = [];
function fibo2(n){
    for(let i = d.length; i <= n; i+=1){
        if(d[n])
            return data[n];

        d.push(i<2 ? i : d[n-1] + d[n-2]);
    }
    return d[n];
}

//-----------------------------------------
function memoized(fn){
    const cache = {};

    return function(k){
        return cache[k] || (cache[k] = fn(k));
    }
}

const mfibo = memoized(
    function(n){
        return (n < 2 ? n : mfibo[n-1] + mfibo[n-2]);
    }
);
mfibo(5);
mfibo(7);