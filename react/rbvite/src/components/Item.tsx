import { useEffect, useReducer, useRef, useState } from "react";
import { Form, useOutletContext, useSearchParams } from "react-router-dom";
import { useSession } from "../contexts/session-context";

type Prop = {
    item: Cart;
    toggleEditing: () => void;
};

function ItemRead({item, toggleEditing}: Prop) {
    return (
    <div className="text-right">
        <div>
            <span className="float-start">상품명:</span>
            {item.name}
        </div>
        <div>
            <span className="float-start">금액:</span>
            {item.price.toLocaleString()}원
        </div>
        <div>
            <button onClick={}>수정</button>
        </div>
    </div>
)};

const ItemUpdte = ({item, toggleEditing}:Prop) => {
    const {saveItem} = useSession();
    const itemNameRef = useRef<HTMLInputElement>(null);
    const itemPriceRef = useRef<HTMLInputElement>(null);

    const saveCartItem = (e: React.FormEvent) => {
        e.preventDefault();
        const id = item.id;
        const name = itemNameRef.current?.value;
        const price = Number(itemPriceRef.current?.value);
        if(!name){
            alert('상품명을 정확히 입력하세요');
            itemNameRef.current?.focus();
            return;
        }else if (isNaN(price) || !price){
            alert('가격을 정확히 입력하세요');
            itemPriceRef.current?.focus();
            return;
        }
        saveItem({id, name, price});
        toggleEditing();
    };
    useEffect(() => {
        if(itemNameRef.current) itemNameRef.current.value = item.name;
        if (itemPriceRef.current) itemPriceRef.current.value = String(item.price);
        itemNameRef.current?.select();
    }, [item]);

    return(
        <form onSubmit={saveCartItem} onReset={toggleEditing} className="p-5">
            <input type="text"
            ref={itemNameRef}
            placeholder="상품명..."
            className="border-2 border-sky-300 rounded-md"
            />
            <input type="number"
            ref={itemPriceRef}
            placeholder="금액..."
            className="border-2 border-sky-300 rounded-md mt-2"
            />
            <div className="p-5">
                <button type="reset" className="mx-5">
                    취소
                </button>
                <button type="submit" className="btn-primary">
                    수정
                </button>
            </div>
        </form>
    );
};

export const Item = () => {
    const {item} = useOutletContext<{item:Cart}>();
    const {isEditing, toggleEditing} = useReducer((pre) => !pre, false);
    return (
        <>
            {isEdting ? <form></form>}
            {item.name};
        </>
    )
};