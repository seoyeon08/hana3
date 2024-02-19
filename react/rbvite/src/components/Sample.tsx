import { ChangeEvent, useState } from "react";

export default function Sample(){
    
    const [nickname, setNickname] = useState('HONG');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState(0);
    
    const CITIES = ['서울', '대전', '대구']; // 상태값이 아니라서 리렌더링 될 때마다 실행된다
    const changeNickname = (e: ChangeEvent<HTMLInputElement>) => setNickname(e.currentTarget.value);
    return(
        <>
            <div style={{width:'100px',textAlign:'center'}}>
                <h1>Sample</h1>
                <h5>NickName: {nickname}({age}세)-{address}</h5>
                <input type="text"
                value={nickname} 
                onChange={changeNickname} />
                <input type="text" value={address} onChange={e => setAddress(e.currentTarget.value)} />

                <select onChange={e => setAddress(e.currentTarget.value)}>
                    {CITIES.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
                <input type="text" value={age} onChange={e => setAge(+e.currentTarget.value)} />
            </div>
        </>
    );
}