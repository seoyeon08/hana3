//exam 1. for in 으로  key value 출력
function ex1(){
    // 주어진 배열
    const arr = [100, 200, 300, 400, 500, 600, 700];
    // for - in 문을 사용하여 배열의 인덱스(key) 출력
    for (let k in arr){
        console.log(k);
    }

    // 원소 값 (value) 출력
    for (let k in arr){
        console.log(arr[k]);
    }

    // 주어진 객체
    const obj = {name:'lim', addr: 'Yongsan', level:1, role:9, receive:false};

    //for in을 사용하여 프로퍼티 이름 (key) 출력하기
    for (let k in obj){
        console.log(k);
    }
    //for in문을 사용하여 프로퍼티 값(value) 출력하기
    for (let k in obj){
        console.log(obj[k]);
    }
    // level 프로퍼티가 열거(entries)되지 않도록 설정하기
    for(let k of Reflect.ownKeys(obj)){
        console.log(k);
    }
    Object.defineProperty(obj, 'level', [enumeralbe= false]);
    console.log(Object.entries(obj));
    // role 프로퍼티는 읽기 전용으로 설정하기
    Object.defineProperty(obj, 'role', {writable : false});
}

function ex2(){
    // 예시 Arr
    const orgArray = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]];

    // 주어진 배열을 객체로 만드는 함수
    function makeObjectFromArray(arr){
        const retObj = {};
        for(const [k, ...v] of arr){
            retObj[k] = v;
        }
        return retObj;
    }
    // 만든 객체를 다시 배열로 만드는 함수
    function makeArrayFromObject(obj){
        const retArr = [];
        for (const k in obj){
            retArr.push([k, ...obj[k]]);
        }
        return retArr;
    }

    const newObj = makeObjectFromArray(orgArray);
    console.log('newObj:', newObj);
    const newArr = makeArrayFromObject(newObj);
    console.log('newArr:', newArr);
}

function ex3(){
    const Kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};
    function copyObject(obj){
        const retObj = {};
        for(const k in obj){
            retObj[k] = obj[k];
        }
        return retObj;
    }
    const newKim = copyObject(Kim);
    console.log('copiedKim:', newKim);
    newKim.addr = 'Daegu';
    console.log(Kim.addr !== newKim.addr);

}