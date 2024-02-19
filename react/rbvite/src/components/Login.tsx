import { useState } from "react";

type Props = {
    login: (id:number, name:string) => void;
};

const Login = ({login}: Props) => {
    console.log('@@@Login');
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    return (
        <>
            <form>
                <span style={{marginRight:'1em'}}>LoginId:{' '} </span>
                <input type="text" onChange={(e) => setId(+e.currentTarget.value)} />
            
                <div>Login Name: <input type="text" onChange={(e) => setName(e.currentTarget.value)}/></div>
                <button onClick={() => login(id, name)}>Login</button>
            </form>
        </>
    );
};
export default Login;