import { FormEvent, useRef, useState } from "react";

type Props = {
    login: (id:number, name:string) => void;
};

export const Login = ({login}: Props) => {
    console.log('@@@Login');
    // const [id, setId] = useState(0);
    const idRef = useRef<HTMLInputElement | null>(null);
    // const nameRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement | null>(null);
    // const [name, setName] = useState('');
    
    const makeLogin = (e: FormEvent<HTMLFormElement>) => {
        // console.log('makeLogin')
        e.preventDefault();

        if (!idRef.current || !idRef.current.value) {
            alert('User ID를 입력하세요!');
            idRef.current?.focus();
            return;
          } else if (!nameRef.current?.value) {
            alert('User name을 입력하세요!');
            nameRef.current?.focus();
            return;
          }      
    }
    return (
        <>
            <form onSubmit={makeLogin}>
                <span style={{marginRight:'1em'}}>LoginId:{' '} </span>
                {/* <input type="text" onChange={(e) => setId(+e.currentTarget.value)} /> */}
                <input type="text" ref={idRef} />
                <input type="text" ref={nameRef} />
                {/* <div>Login Name: <input type="text" onChange={(e) => setName(e.currentTarget.value)}/></div> */}
                {/* <button onClick={() => login(id, name)}>Login</button> */}
            </form>
        </>
    );
};
export default Login;