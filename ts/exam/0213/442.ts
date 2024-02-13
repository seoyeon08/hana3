// 문제1) 다음에서 T1과 동일한 타입으로 T2를 정의하시오.

const cart = {
    X: 1,
    Y: 2,
    Z: 3,
};
  
type T1 = "X" | "Y" | "Z";
// type T2 = T1;
type T2 = keyof typeof cart; // cart는 객체니까 keyof로 type으로 만들어준담에 할당한다.


// 문제2) 다음에서 T3과 동일한 타입으로 T4를 정의하시오.

const constCart = {
    X: 1,
    Y: 2,
    Z: 3,
} as const;     // read only
  
type T3 = 1 | 2 | 3;
type T4 = (typeof constCart)[keyof typeof constCart];   // type은 객체 형태이기 때문에 key는 대괄호 안에 써준다. 순서는 중요하지 않다고 함.
// 요롷게 표현할 수도 있다. 이게 더 간단할지도
type CCT = typeof constCart;
type T5 = CCT[keyof CCT];