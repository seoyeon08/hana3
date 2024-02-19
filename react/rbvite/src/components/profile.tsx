import { LoginUser } from "../App";

type Props = {
    loginUser: LoginUser;
    logout: () => void;
};

const Profile = ({loginUser, logout}: Props) => {
    console.log('@@@Profile');
    return(
        <>
            <div>UserName: {loginUser.name}</div>
            <button onClick={logout}>Logout</button>
        </>
    );
}

export default Profile;