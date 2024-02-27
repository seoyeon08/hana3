//index(add) 페이지

export const Items = () => {
    const {saveItem} = 
    const itemNameRef = useRef<HTMLInputElement>(null);
    const itemPriceRef = useRef<HTMLInputElement>(null);
    const saveCartItem = (e: React.FormEvent) => {
        e.preventDefault();
        // const id = itemIdRef.current;
        const id = currId;
        console.log('🚀  id:', id);
        const name = itemNameRef.current?.value;
        const price = Number(itemPriceRef.current?.value);
        if (!name) {
          alert('상품명을 정확히 입력하세요!');
          itemNameRef.current?.focus();
          return;
        } else if (isNaN(price) || !price) {
          alert('가격을 정확히 입력하세요!');
          itemPriceRef.current?.focus();
          return;
        }
        saveItem({ id, name, price });
        // itemIdRef.current = 0;
        setCurrId(0);
        itemNameRef.current.value = '';
        if (itemPriceRef.current) itemPriceRef.current.value = '0';
      };
    return(
        <>
           <form onSubmit={saveCartItem} onReset={() => setCurrId(0)}>
            <input type='text' ref={itemNameRef} placeholder='상품명...' />
            <input type='number' ref={itemPriceRef} placeholder='금액...' />
            <button type='reset'>취소</button>
            <button type='submit'>{currId ? '수정' : '추가'}</button>
          </form>
        </>
    );
};