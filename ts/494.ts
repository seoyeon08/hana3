type Userr = { id: number; name: string; age: number };
type OmitedAgeUser = Omit<Userr, 'age'>;
type OmitedIdAgeUser = Omit<Userr, 'id' | 'age'>;

// ex1) 다음 UserProfile 타입을 type 또는 interface로 정의하시오.
// type UserProfilee = Omit<User, 'age'> & {addr: string};
interface UserProfilee extends Omit<User, 'age'> {
  addr: string;
}
let iUser: UserProfilee = { id: 1, name: 'Hong', addr: 'Seoul' };