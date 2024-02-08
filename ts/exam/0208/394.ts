// type Ud2 = (TUser | TDept) & {addr: string};

interface User {
    id: number;
    name: string;
  }
  
  interface Dept {
    id: number;
    dname: string;
    captain: string;
  }

  interface Ud2{        // 초보자용 때려박기
    id: number;
    name?: string;
    dname?: string;
    captain?: string;
    addr: string;
  }

//type Ud2 = (User | Dept) & (addr: string);   => answer
  
//   interface Ud2 extends Partial<User>, Partial<Dept>{
//     id: number;
//     name?: string;
//     dname?: string;
//     captain?: string;
//     addr: string;
//   }      => 또 다른 answer


// interface Ud2 {
//     (idx: string): string | number;
//     id: number;
//     addr: string;
// }      => 얘도 answer


  // 다음 코드가 오류가 없으면 통과!
  const ud2: Ud2 = {id: 1, name: 'HH', addr: 'Seoul'};
  const ud3: Ud2 = {id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul'};