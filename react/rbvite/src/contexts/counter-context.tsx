import { PropsWithChildren, createContext, useContext, useState } from "react";

type CounterContextProp = {
    count: number;
    plusCount: () => void;

}

const CounterContext = createContext<CounterContextProp>({
    // default 값
    count: 0,
    plusCount: () => {},
});

export const CounterProviedr = ({children}: PropsWithChildren) => {
    const [count, setCount] = useState(0);
    const plusCount = () => setCount((prevCount) => prevCount + 1);

    return(
        <>
        <CounterContext.Provider value = {{count, plusCount}}>
            {children}
        </CounterContext.Provider>
        </>
    );
};

// useCounter를 함수로 안 하면, 쓸 때 함수형으로 복잡하게 써야하니까 화살표 함수로 해주자 
export const useCounter = () => useContext(CounterContext);