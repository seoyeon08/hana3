import { Cart, LoginUser, Session } from "../App";
import Login from './Login';
import Profile from "./profile";
import { useState } from 'react';


type Props = {
    session: Session;
    login: (id:number, name:string) => void;
    logout: () => void;
    removeItem: (itemId: number) => void;
};

export const My = ({session:{loginUser, cart}, login, logout, removeItem}:Props) => {
    const [sessionState, setSessionState] = useState(cart);
    console.log('@@@My');

    return(
        <>
            {loginUser ? (<Profile loginUser={loginUser} logout={logout} />)
            : (
                <Login login={login} />
            )}         
            <ul>
                {cart.map(({id,name,price}:Cart)=> (
                    <li key={id}>{name}({price.toLocaleString()}원)
                    <button onClick={() => removeItem(id)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    );
}; 

export default My;