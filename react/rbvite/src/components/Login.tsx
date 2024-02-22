import { FormEvent, ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { useCounter } from "../contexts/counter-context";
import { useSession } from "../contexts/session-context";
import { useToggle } from "../hooks/toggle";
import { useTimeout } from "../hooks/timeout";

export type LoginHandler = {
    noti: (msg: string) => void;
    focusId: () => void;
    focusName: () => void;
  };

// type Props = {
//     login: (id:number, name:string) => void;
// };

export const Login = forwardRef((_, ref: ForwardedRef<LoginHandler>) => {
    console.log('@@@Login');
    // const [id, setId] = useState(0);
    const idRef = useRef<HTMLInputElement | null>(null);
    // const nameRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement | null>(null);
    // const [name, setName] = useState('');

    const { count } = useCounter();
    const { login } = useSession();

    const handler = {
        noti: (msg: string) => alert(msg),
        focusId: () => idRef.current?.focus(),
        focusName: () => nameRef.current?.focus(),
      };
    
      useImperativeHandle(ref, () => handler);
    
      const makeLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // submit 기본 기능을 무력화!
        // console.log(`makeLogin#${idRef.current?.value}#`);
    
        // if (!idRef.current?.value) {
        // if (!idRef.current || !idRef.current.value) {
        //   alert('User ID를 입력하세요!');
        //   idRef.current?.focus();
        //   return;
        // } else if (!nameRef.current?.value) {
        //   alert('User name을 입력하세요!');
        //   nameRef.current?.focus();
        //   return;
        // }
    
        const id = Number(idRef.current?.value);
        console.log('🚀  id:', id);
        const name = nameRef.current?.value;
        console.log('🚀  name:', name);
        login(id, name ?? '');
    };

    useEffect(() => {
        // plusCount();
        return () => {
            // minusCount();
        };
    }, []);
    useTimeout(() => console.log('X=', count), 1000, [count]);
      // const [isShow, setShow] = useState(false);
    const [isShow, toggle] = useToggle();
    // const {reset, clear} = useTimeout(
    //     () => console.log(''),[1000]

    // );

    return (
        <>
            <button
                onClick={toggle}
                style={{ border: `1px solid ${isShow ? 'blue' : 'yellow'}` }}
            >
                {isShow ? 'HIDE' : 'SHOW'}
            </button>
            <form onSubmit={makeLogin}>
            <div>
                <span style={{ marginRight: '1em' }}>{count}-LoginID:</span>
                <input type='number' ref={idRef} />
            </div>

            <div>
                LoginName:
                {/* <input type='text' onChange={(e) => setName(e.currentTarget.value)} /> */}
                <input type='text' ref={nameRef} />
            </div>
                {/* <input type="text" onChange={(e) => setId(+e.currentTarget.value)} /> */}
                <button type='submit'>Sign-in</button>
                {/* <div>Login Name: <input type="text" onChange={(e) => setName(e.currentTarget.value)}/></div> */}
                {/* <button onClick={() => login(id, name)}>Login</button> */}
            </form>
        </>
    );
});
Login.displayName = 'Login';