import { PropsWithChildren, createContext, useCallback, useContext, useReducer, useState } from "react";

type CounterContextProp = {
    count: number;
    plusCount: () => void;
    minusCount: (payload?: number) => void;
}

type ReducerAction = {
    type: string; // 'plus' | 'minus'
    payload?: number;
};


enum ACTION {
    PLUS = 'plus',
    MINUS = 'minus',
}
// 그 다음에 ACTION.PLUS 이런 식으로 쓰는거다.
// 하하

const reducer = (count:number, {type,payload = 1}:ReducerAction) => {
    // console.log('🚀  payload:', payload, count);
    // switch (type) {
    // if(type === 'plus'){
    //     return count + 1;
    // }
    // if (type === 'minus'){
    //     return count - payload;
    // }
    // return count;
    // 이런 방법으로 구현할 수도 있다.
    switch(type){
        case 'plus': 
            return count + payload;
        case 'minus' :
            return count - payload;
        default :
            return count;
    }
};

// export const CounterProvider = ({children} : PropsWithChildren) => {
//     const [count, dispatch] = useReducer(reducer, 0);
//     const plusCount = () => dispatch({type:'plus'});
//     const minusCount = (payload)
// }

const CounterContext = createContext<CounterContextProp>({
    // default 값
    count: 0,
    plusCount: () => {},
    minusCount: () => {},
});


export const CounterProvider = ({children}: PropsWithChildren) => {
    const [count, dispatch] = useReducer(reducer, 0);

    const plusCount = () => dispatch({type:ACTION.PLUS});
    const minusCount = (payload: number = 1) => {
        dispatch({type: ACTION.MINUS, payload});
    }
    // const [count, setCount] = useState(0);
    // const plusCount = () => setCount((prevCount) => prevCount + 1);
    // const minusCount = () => setCount((prevCount) => prevCount - 1);

    // memoization을 하는 방법. 이게 제일 좋다.
    // const plusCount = useCallback(
    //     () =>setCount((prevCount) => prevCount + 1)
    // ,[]); // 만약 여기 빈 []에 cart를 쓰면, cart가 바뀔 때마다 다시 실행하라는 뜻이다

    // const minusCount = useCallback(
    //     () =>setCount((prevCount) => prevCount - 1)
    // ,[]);

    return(
        <>
        <CounterContext.Provider value = {{count, plusCount, minusCount}}>
            {children}
        </CounterContext.Provider>
        </>
    );
};

// useCounter를 함수로 안 하면, 쓸 때 함수형으로 복잡하게 써야하니까 화살표 함수로 해주자 
export const useCounter = () => useContext(CounterContext);