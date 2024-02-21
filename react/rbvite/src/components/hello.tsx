import { PropsWithChildren, useState } from 'react';
import { useSession } from '../contexts/session-context';

type Props = {
    name: string;
    age: number;
    plusCount : () => void;
    children: React.ReactNode;
};

// export const Hello = ({name, age, plusCount, children}: PropsWithChildren<Props>) => {
    
//     const {session:{
//         {loginUser},
//     }} = useSession();
//     return (
//     <>
//         <div style={{border: '1px solid green'}}>
//             <h3>Hello, {name}({age})</h3>
//             {children}
//             <button onClick={plusCount}>count + 1</button>
//         </div>
//     </>
// )};