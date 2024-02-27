import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSession } from "../contexts/session-context";


const ItemLayout:React.FC = () => {
    const navigate = useNavigate();
    const [currItem, setCurrItem] = useState<Cart | null>(null);
    const {session: {cart}} = useSession();
    return(
            <>
            <div style={{display: 'flex', gap:'20px'}}>
                <ul>
                    {cart.map(item => <li key={item.id}>
                        <button onClick={() => {
                            setCurrItem(item);
                            navigate(`/v1/items/${item.id}`)
                        }}>{item.name}</button>
                    </li>)}
                </ul>
            </div>
            
            <div style={{flex:2}}>
                <h2>Item Details</h2>
                <Outlet context={{item:currItem}}/>
            </div>
        </>
    );
};

export default ItemLayout;