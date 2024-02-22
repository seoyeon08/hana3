// import { useTimer } from '../hooks/timer-hooks';
import { useEffect } from 'react';

type ClearableTimeout = ReturnType<typeof setTimeout> | undefined;

export const useTimeout = (
        
    cb: () => void,
    delay: number,
    dependencies: unknown[] = []
    ) => {
        let timeoutId: ClearableTimeout;

        const reset = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(cb, delay);
        };
        const clear = () => {
            clearTimeout(timeoutId);
          };
        
    useEffect(() => {
        // const tmout = setTimeout(cb, delay);
        reset();

        // return () => clearTimeout(tmout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return clear;
    }, dependencies);

    return {reset, clear};
};

// useTimeout(() => console.log('X'), 1000);
// useTimeout(() => console.log(`Hello, ${name}!!!`), 1000, ['Hong']);

//after
// const {reset, clear} = useTimeout(() => console.log('X'), 1000);
useTimeout(() => console.log(`Hello, ${name}!!!`), 1000, ['Hong']);