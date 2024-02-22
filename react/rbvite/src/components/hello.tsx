import { PropsWithChildren } from 'react';
import { useSession } from '../contexts/session-context';
import { useCounter } from '../contexts/counter-context';

type Props = {
    name: string;
    age: number;
    plusCount : () => void;
    children: React.ReactNode;
};

const Hello = ({ children }: PropsWithChildren<Props>) => {
    const { count: age, plusCount } = useCounter();
    const { session } = useSession();
    const name = session.loginUser?.name || 'Guest';
  
    return (
      <div style={{ border: '1px solid green' }}>
        <h3>
          Hello, {name} ({age})
        </h3>
        <button onClick={plusCount}>Plus Age</button>
        <div>{children}</div>
      </div>
    );
};

export default Hello;