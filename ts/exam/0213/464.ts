// 다음 코드가 오류가 나지 않도록 수정하시오.
// 단, itemPrices의 item에는 재고(stock)에 있는 item들만 가능합니다.

interface IUser {
    id: number;
    age: number;
    name: string;
}

interface IDept {
    id: number;
    age: string;
    dname: string;
    captain: string;
}
type Change = < 이 부분을 작성하세요 >;
type DeptCaptain = Change<IDept, 'captain', IUser>;
type Err = Change<IDept, 'somekey', IUser>; // Error!!! 없는 키에 대해서 만들면 에러