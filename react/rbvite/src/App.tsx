import { Ref, createRef, forwardRef, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import './App.css';
// import { Hello } from './components/hello';
import My, { ItemHandler } from './components/My';
import { flushSync } from 'react-dom';
import { useCounter } from './contexts/counter-context';
// import Hello from './components/hello';
import { SessionProvider } from './contexts/session-context';
import Posts from './components/Posts';

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};


// const SampleSession = {
//   // loginUser: null,
//   loginUser: { id: 1, name: 'Hong' },
//   cart: [
//     { id: 100, name: '라면', price: 3000 },
//     { id: 101, name: '컵라면', price: 2000 },
//     { id: 200, name: '파', price: 5000 }
//   ],
// };

// function useState(initValueOrInitFunction){
//   const state = {
//     _state :
//     typeof initValueOrInitFunction === 'function'
//     ? initValueOrInitFunction() :
//     initValueOrInitFunction;
//     setState(value){
//       this._state = value;
//       VDom.rerender;
//     }
//     get state(){
//       return this._state;
//     }
//   };
//   return [state.state, state.setState];
// }
const H5 = forwardRef(({ ss }: { ss: string }, ref: Ref<HTMLInputElement>) => {
  const [, rerender] = useState(0);
  const array = useMemo(() => [1, 2, 3], []);
  const id = useId();
  // const arr = array.map((a, i) => ({id: useId(), val:a}));
  useEffect(() => {
    console.log('effect Array@@@');
  }, [array]);  
  
  return (
      <div style={{ border: '1px solid skyblue', marginBottom: '0.5rem' }}>
        <h5>H55555566-{ss}</h5>
        <input type='text' ref={ref} placeholder='child-input...' />
      </div>
    );
  });
  H5.displayName = 'H5';

type Position = {
  x: number;
  y: number;
}

function App() {
  // const [count, setCount] = useState(0);
  // const [session, setSession] = useState<Session>(SampleSession);
  // const plusCount = () => setCount(count+1);
  // const titleRef = useRef<HTMLHeadingElement>(null);
  const { count, plusCount } = useCounter();
  const childInputRef = createRef<HTMLInputElement>();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const myHandlerRef = useRef<ItemHandler>(null);

  const [position, setPosition] = useState<Position>({x:0, y:0});

const catchPosition = ({x, y}:Position) => {
  setPosition({x, y});
}

  useLayoutEffect(() => {
    window.addEventListener('mousemove', (e) => {
      
    });
    return () => window.removeEventListener('mousemove', catchPosition);
  });
  <small>{JSON.stringify(position)}</small>

  // const childern = ;
  // const login = (id:number, name:string) => {
  //   setSession([...session, ])
  // };
  // const login = (id:number, name:string) => {
  //   setSession({...session, loginUser:{id, name}});
  // };
  // const logout = () => {
  //   setSession({...session, loginUser:null}); // 중요. 왜 이렇게 짜는지 꼭 알아야 함
  // };
  // const removeItem = (itemId:number) => {
  //   setSession({
  //     ...session,
  //     cart: session.cart.filter((item) => item.id !== itemId),
  //   });
  // }
  return (
    <>
      <Posts />
      
      <h1 ref={titleRef} style={{ color: 'white', backgroundColor: 'red' }}>
        Vite + React
      </h1>
      <H5 ss={`First-Component ${count}`} ref={childInputRef} />
      <button
        onClick={() => {
          if (childInputRef.current) {
            childInputRef.current.value = 'XXXX';
            childInputRef.current.select();
          }
        }}
      >
        call H5 input
      </button>
      <button onClick={() => myHandlerRef.current?.signOut()}>
        App-Sign-Out
      </button>
      <button onClick={() => myHandlerRef.current?.notify('테스트메시지')}>
        Message
      </button>
      <button onClick={() => myHandlerRef.current?.removeItem()}>Rm2</button>

      <SessionProvider myHandlerRef={myHandlerRef}>
        <My ref={myHandlerRef} />
        {/* <Hello>Hello-children!!!!!!!!!!!</Hello> */}
      </SessionProvider>

      <div className='card'>
        <button
          onClick={() => {
            // setCount((count) => count + 1);
            for (let i = 0; i < 10; i += 1) {
              // console.log('i=', i);
              // setCount(count + 1);
              // setCount((prev) => prev + 1);
              flushSync(plusCount);
            }
          }}
          >
          count is {count}
        </button>
      </div>
      <button
        onClick={() => titleRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        Go to the Top
      </button>
      {/* <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'> */}
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Hello name='Hong' age={count + 25} plusCount={plusCount}>
          Hello Childern
        </Hello> */}
        {/* <h2>count : {count}</h2>
        <My
        session={session}
        login={login}
        logout={logout}
        removeItem={removeItem}
      /> */}
        {/* <Hello name='Hong' age={25} plusCount={plusCount}>반갑습니다.</Hello> */}
        
        {/* <button onClick={()=> {
          for(let i = 0; i < 10; i += 1){
            console.log('i=', 1);
            setCount(prev => prev + 1); //클릭을 두 번 할수도 있으니까, 정확함을 위해 콜백 함수를 쓰는게 맞다.
            flushSync(plusCount);
          }
        }}>
          count is {count}
        </button>
        <button onClick={() => titleRef.current?.scrollIntoView({behavior: 'auto'})}></button>
        
      </div> */}
    </>
  );
}

export default App;
