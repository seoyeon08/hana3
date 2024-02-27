/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import {
  ReactNode,
  RefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { ItemHandler } from '../components/My';
import { useFetch } from '../hooks/fetch';
import { LoginHandler } from '../components/Login';

type SessionContextProp = {
  session: Session;
  login: (id: number, name: string) => boolean;
  logout: () => void;
  saveItem: ({ id, name, price }: Cart) => void;
  removeItem: (itemId: number) => void;
  totalPrice: number;
};

// @move to public/data/sample.json!!

const SessionContext = createContext<SessionContextProp>({
  session: { loginUser: null, cart: [] },
  login: () => false,
  logout: () => {},
  saveItem: () => {},
  removeItem: () => {},
  totalPrice: 0,
});

type ProviderProps = {
  children: ReactNode;
  myHandlerRef?: RefObject<ItemHandler>;
  loginHandlerRef?: RefObject<LoginHandler>;
};

type Action =
  | {
      type: 'login' | 'logout';
      payload: LoginUser | null;
    }
  | { type: 'set'; payload: Session }
  | { type: 'saveItem'; payload: Cart }
  | { type: 'removeItem'; payload: number };

const reducer = (session: Session, { type, payload }: Action) => {
  switch (type) {
    case 'set':
      return { ...payload };

    case 'login':
    case 'logout':
      return { ...session, loginUser: payload };

    case 'saveItem': {
      const { id, name, price } = payload;
      const { cart } = session;
      const foundItem = id !== 0 && cart.find((item) => item.id === id);
      if (!foundItem) {
        const maxId = Math.max(...session.cart.map((item) => item.id), 0) + 1;
        // cart.push({ id: maxId + 1, name, price }); // Bug!!
        return { ...session, cart: [...cart, { id: maxId + 1, name, price }] };
      }

      foundItem.name = name;
      foundItem.price = price;
      console.log('🚀  foundItem:', foundItem);

      return { ...session };
    }

    case 'removeItem':
      return {
        ...session,
        cart: session.cart.filter((item) => item.id !== payload),
      };
    default:
      return session;
  }
};

export const SessionProvider = ({
  children,
  myHandlerRef,
  loginHandlerRef,
}: ProviderProps) => {
  // const [session, setSession] = useState<Session>({
  //   loginUser: null,
  //   cart: [],
  // });
  const [session, dispatch] = useReducer(reducer, {
    loginUser: null,
    cart: [],
  });

  const totalPrice = useMemo(
    () => session.cart.reduce((sum, item) => sum + item.price, 0),
    [session.cart]
  );

  const login = useCallback((id: number, name: string) => {
    const loginNoti =
      myHandlerRef?.current?.loginHandler.noti ||
      loginHandlerRef?.current?.noti ||
      alert;
    console.log('🚀  loginNoti:', loginNoti);

    const focusId =
      myHandlerRef?.current?.loginHandler.focusId ||
      loginHandlerRef?.current?.focusId;
    const focusName =
      myHandlerRef?.current?.loginHandler.focusName ||
      loginHandlerRef?.current?.focusName;

    if (!id || isNaN(id)) {
      loginNoti('User ID를 입력하세요!');
      if (focusId) focusId();
      return false;
    }

    if (!name) {
      loginNoti('User name을 입력하세요!');
      if (focusName) focusName();
      return false;
    }

    // setSession((session) => ({ ...session, loginUser: { id, name } }));
    dispatch({ type: 'login', payload: { id, name } });
    return true;
  }, []);

  const logout = useCallback(() => {
    // setSession({ cart: [...session.cart], loginUser: null });
    // session.loginUser = null;
    // setSession((session) => ({ ...session, loginUser: null }));
    dispatch({ type: 'logout', payload: null });
  }, []);

  // add(id=0) or modify(id!=0) item
  const saveItem = useCallback(({ id, name, price }: Cart) => {
    // const { cart } = session;
    // const foundItem = id !== 0 && cart.find((item) => item.id === id);
    // if (!foundItem) {
    //   id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
    //   cart.push({ id, name, price });
    // } else {
    //   foundItem.name = name;
    //   foundItem.price = price;
    // }

    // console.log('🚀  session:', session);
    // setSession({
    //   ...session,
    //   // cart,
    //   cart: [...cart],
    // });
    dispatch({ type: 'saveItem', payload: { id, name, price } });
  }, []);

  // data 처리는 별도!

  const removeItem = useCallback((itemId: number) => {
    console.log('🚀  itemId:', itemId);
    // setSession({
    //   ...session,
    //   // cart: [...session.cart.filter((item) => item.id !== itemId)],
    //   cart: session.cart.filter((item) => item.id !== itemId),
    // });
    dispatch({ type: 'removeItem', payload: itemId });

    // Virtual-DOM의 rerender() 호출 안함(: session의 주소는 안변했으니까!)
    // session.cart = session.cart.filter((item) => item.id !== itemId);
  }, []);

  const { data, error } = useFetch<Session>({
    url: '/data/sample.json',
  });
  if (error) console.error('ERROR:', error);

  useEffect(() => {
    if (data) {
      // console.log('ddddddddddddd>>>', data);
      dispatch({ type: 'set', payload: data });
    }
  }, [data]);

  return (
    <SessionContext.Provider
      value={{ session, login, logout, saveItem, removeItem, totalPrice }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);

// import {
//     ReactNode,
//     RefObject,
//     createContext,
//     useCallback,
//     useContext,
//     useMemo,
//     useReducer,
//     useState,
//   } from 'react';
// import { ItemHandler } from '../components/My';
// import { Cart, Session } from '../App';

// const LOGIN = 'LOGIN';;
// const LOGOUT = 'LOGOUT';
// const SAVE_ITEM = 'SAVE_ITEM';
// const REMOVE_ITEM = 'REMOVE_ITEM';

// type SessionAction = 
//   | {type: typeof LOGIN; payload:{id:number, name:string}}
//   | {type: typeof LOGOUT}
//   | {type: typeof SAVE_ITEM; payload:{id:number, name:string, price:number}}
//   | {type: typeof REMOVE_ITEM; payload:{itemId:number}};

// type SessionContextProp = {
//     session: Session;
//     dispatch: React.Dispatch<SessionAction>;
//     login: (id: number, name: string) => void;
//     logout: () => void;
//     saveItem: ({ id, name, price }: Cart) => void;
//     removeItem: (itemId: number) => void;
//     totalPrice: number;
//   };
  
//   const SessionContext = createContext<SessionContextProp>({
//       session: { loginUser: null, cart: [] },
//       login: () => {},
//       logout: () => {},
//       saveItem: () => {},
//       removeItem: () => {},
//       totalPrice: 0,
//     });

//   type ProviderProps = {
//     children: ReactNode;
//     myHandlerRef?: RefObject<ItemHandler>;
//   };

// const SampleSession: Session = {
// loginUser: null,
// // loginUser: { id: 1, name: 'Hong' },
// cart: [
//     { id: 100, name: '라면', price: 3000 },
//     { id: 101, name: '컵라면', price: 2000 },
//     { id: 200, name: '파', price: 5000 },
// ],
// };


// type ProviderProps = {
// children: ReactNode;
// myHandlerRef?: RefObject<ItemHandler>;
// };

// // function add<T extends number |string>(a:number|string, b:number|string):T extends string ?string:number{
// //   return a + b;
// // }
// type Action = {
//   type: 'login' | 'logout'; payload: LoginUser;
// } 
// | {type: 'set', payload:Session}
// | {type: 'saveItem'; payload:Cart}
// | {type: 'removeItem'; payload: number};

// const reducer = (session:Session, {type, payload}:Action) => {
//   switch (type){
//     case 'set' :
//       return {...(payload as Session)};
//     case 'login' :
//       return { ...session, loginUser:payload as LoginUser};
//     case 'logout' :
//       return { ...session, loginUser:payload};
//     case 'saveItem' : // 핵심
//       const {id, name, price} = payload;
//       const { cart} = session;
//       const foundItem = id !== 0 && cart.find((item) => item.id === id);
//       if(!foundItem){
//         const maxId = Math.max(...session.cart.map((item) => item.id), 0)+1;
//         return { ...session, cart: [...cart, { id: maxId + 1, name, price }] };
//       }
//       else{
//         foundItem.name = name;
//         foundItem.price = price;
//       }
//       return { ...session};
    
//     default :
//       return session;
//   }
// };

// // 타입 서술어
// function isCartType(data: Cart |number):data is Cart {
//   return typeof data !==  'number';
// }

// // type Action = {
// //   type: 'set' | 'login' | 'logout' | 'saveItem' | 'removeItem' ;
// //   payload: Session | LoginUser |Cart |number;
// // }

// // const reducer = (state, action)_ => {};

// export const SessionProvider = ({ children, myHandlerRef }: ProviderProps) => {
//     // const [session, setSession] = useState<Session>(SampleSession);
//     // const login = (id: number, name: string) => {
//     //     const loginNoti = myHandlerRef?.current?.loginHandler.noti || alert;
//     //     console.log('🚀  loginNoti:', loginNoti);
//     //     const focusId = myHandlerRef?.current?.loginHandler.focusId;
//     //     const focusName = myHandlerRef?.current?.loginHandler.focusName;
//     const [session, dispatch] = useReducer(reducer, {
//       loginUser: null,
//       cart: [],
//     });

//     const totalPrice = useMemo(
//       () => session.cart.reduce((sum, item) => sum + item.price, 0),
//       [session.cart]
//     );
//     const login = useCallback((id: number, name: string) => {
//       const loginNoti = myHandlerRef?.current?.loginHandler.noti || alert;
//       console.log('🚀  loginNoti:', loginNoti);
  
//       const focusId = myHandlerRef?.current?.loginHandler.focusId;
//       const focusName = myHandlerRef?.current?.loginHandler.focusName;
//       if (!id || isNaN(id)) {
//         loginNoti('User ID를 입력하세요!');
//         if (focusId) focusId();
//         return;
//       }
//       if (!name) {
//         loginNoti('User name을 입력하세요!');
//         if (focusName) focusName();
//         return;
//       }

//       // setSession((session) => ({ ...session, loginUser: { id, name } }));
//       dispatch({ type: 'login', payload: { id, name } });
//     }, []);

//     const logout = useCallback(() => {
//        // setSession((session) => ({ ...session, loginUser: null }));
//       dispatch({ type: 'logout', payload: null });
//     }, []);

// };
//       // if (!id || isNaN(id)) {
//       //       loginNoti('User ID를 입력하세요!');
//       //       if (focusId) focusId();
//       //       return;
//       //     }
      
//       //     if (!name) {
//       //       loginNoti('User name을 입력하세요!');
//       //       if (focusName) focusName();
//       //       return;
//       //     }
      
//         //   setSession({ ...session, loginUser: { id, name } });
//         // };
//         // const logout = () => {
//         //   // setSession({ cart: [...session.cart], loginUser: null });
//         //   // session.loginUser = null;
//         //   setSession({ ...session, loginUser: null });
//         // };
//         // add(id=0) or modify(id!=0) item
//         const saveItem = ({ id, name, price }: Cart) => {
//           // const { cart } = session;
//           // const foundItem = id !== 0 && cart.find((item: { id: number; }) => item.id === id);
//           // if (!foundItem) {
//           //   id = Math.max(...session.cart.map((item: { id: any; }) => item.id), 0) + 1;
//           //   cart.push({ id, name, price });
//           // } else {
//           //   foundItem.name = name;
//           //   foundItem.price = price;
//           // }
//           // setSession({
//             // ...session,
//             // cart,
//             // cart: [...cart],
//           // });
//           dispatch({ type: 'saveItem', payload: { id, name, price } });
//         }, []);

//         const removeItem = useCallback((itemId: number) => {
//           console.log('🚀  itemId:', itemId);
//           // setSession({
//             // ...session,
//             // cart: [...session.cart.filter((item) => item.id !== itemId)],
//             // cart: session.cart.filter((item: { id: number; }) => item.id !== itemId),
//             dispatch({ type: 'removeItem', payload: itemId });
//         },[]);
//           // Virtual-DOM의 rerender() 호출 안함(: session의 주소는 안변했으니까!)
//           // session.cart = session.cart.filter((item) => item.id !== itemId);
        

//         useEffect(() => {
//           const controller = new AbortController();
//           const { signal } = controller;
//           (async function () {
//             const res = await fetch('/data/sample.json', {
//               signal,
//             });
//             const data = (await res.json()) as Session;
//             setSession(data);
//             // setSession(data);
//             dispatch({ type: 'set', payload: data });
//           })();
          
//           return () => {
//             controller.abort();
//           };
//         }, []);
//         // return (
//         //   <SessionContext.Provider
//         //     value={{ session, login, logout, saveItem, removeItem }}
//         //   >
//         //     {children}
//         //   </SessionContext.Provider>
//         // );

//         return (
//           <SessionContext.Provider
//             value={{ session, login, logout, saveItem, removeItem, totalPrice }}
//           >
//             {children}
//           </SessionContext.Provider>
//         );      
//       export const useSession = () => useContext(SessionContext);
