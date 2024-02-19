import { Children, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Hello } from './components/hello';
import My from './components/my';
import Sample from './components/Sample';

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};


const SampleSession = {
  // loginUser: null,
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 }
  ],
};

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

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);
  const plusCount = () => setCount(count+1);
  // const childern = ;
  // const login = (id:number, name:string) => {
  //   setSession([...session, ])
  // };
  const login = (id:number, name:string) => {
    setSession({...session, loginUser:{id, name}});
  };
  const logout = () => {
    setSession({...session, loginUser:null}); // 중요. 왜 이렇게 짜는지 꼭 알아야 함
  };
  const removeItem = (itemId:number) => {
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== itemId),
    });
  }
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Hello name='Hong' age={count + 25} plusCount={plusCount}>
          Hello Childern
        </Hello> */}
        <h2>count : {count}</h2>
        <My
        session={session}
        login={login}
        logout={logout}
        removeItem={removeItem}
      />
        <Hello name='Hong' age={25} plusCount={plusCount}>반갑습니다.</Hello>
        
        <button onClick={()=> {
          for(let i = 0; i < 10; i += 1){
            console.log('i=', 1);
            setCount(prev => prev + 1); //클릭을 두 번 할수도 있으니까, 정확함을 위해 콜백 함수를 쓰는게 맞다.
          }
        }}>
          count is {count}
        </button>
        
      </div>
      
    </>
  );
}

export default App;