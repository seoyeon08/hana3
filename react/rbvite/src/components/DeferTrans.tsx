import { ChangeEvent, useEffect, useState } from "react"

type List = {
    id: number;
    value: String;
}

function useDebounce(value:any, delay:number):any {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {clearTimeout(handler);
        };
    }, [value, delay]);

    return debounceValue;
}

export default function DeferTranse() {
    
    const [searchStr, setSearchStr] = useState('');
    const [list, setList] = useState([]);
    const [transition, setTransition] = useState(0);
    //다른애들을 지연시키지 않기 위해 나를 젤 마지막에 그린다.
    // useEffect를 썼으면 4번 걸릴텐데 useTransition하면 한 번만 하면 된다????
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.currentTarget;
        setSearchStr(value);
        const list = [];
        for (let i = 0; i < 1000; i++) list.push({id:i + 1, value});
        setList(list);

        useEffect(() => {
            const timer = setTimeout(() => {
                setDebounce(searchStr);

            }, 500,[searchStr]);
        })
    }
    
    return <>

        <input type="text" onChange={handleChange} />
        <h2>{searchStr}</h2>
        <ul>
        {list.map(item => <li key={item.key}>{item.value}</li>)}
        </ul>
    </>
}