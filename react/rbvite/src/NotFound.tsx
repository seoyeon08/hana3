// import { Navigate } from "react-router-dom";

// export const NotFound = () => {
//     return(
//         <Navigate to='/' />
//     );
// }
export const NotFound = () => <h1>Page Not Found (404)</h1>;


// import { useTimeout } from '../hooks/timeout';
// export const NotFound = () => {
//   const navigate = useNavigate();
//   // 2초 후 홈으로 이동
//   // useTimeout(() => navigate('/'), 2000);

//   // 이전 페이지로 Back
//   useTimeout(() => navigate(-1), 2000);

//   return <div>페이지를 찾을 수 없습니다!</div>;
// };
