import { PropsWithChildren, createContext, useContext, useState } from "react";

type User = {

}

type SessionContextProp = {
    value : {
        session: User | null,
        login:(user: User) => void,
        loginout: () => void,
        removeCartItem:(itemId: number) => void,
        addCartItem:(item: any) => void,
    }
};

const SessionContext = createContext<SessionContextProp | undefined>(undefined);


const SessionProviedr: React.FC = ({}) => {
    const [session, setSession] = useState<User|null>(null);
    return(
        <>
        {/* <SessionContext.Provider value={{session, login, logout, removeCartItem, addCartItem}}>
            {childern}
        </SessionContext.Provider> */}
        </>
    );
};

export const useSession = useContext(SessionContext);