// import { Navigate } from "react-router-dom";

// export const NotFound = () => {
//     return(
//         <Navigate to='/' />
//     );
// }
// export const NotFound = () => <h1>Page Not Found (404)</h1>;


// import { useTimeout } from '../hooks/timeout';
// export const NotFound = () => {
//   const navigate = useNavigate();
//   // 2초 후 홈으로 이동
//   // useTimeout(() => navigate('/'), 2000);

//   // 이전 페이지로 Back
//   useTimeout(() => navigate(-1), 2000);

//   return <div>페이지를 찾을 수 없습니다!</div>;
// };


import { useNavigate } from 'react-router-dom';
import { useTimeout } from './hooks/timeout';
export const NotFound = () => {
  console.log('NotFound>>>', location.pathname);
  const navigate = useNavigate();
  // useTimeout(() => navigate('/'), 2000);
//   useTimeout(() => navigate(-1), 2000);
  // useTimeout(() => navigate(-1), 2000);
  useTimeout(() => navigate('/posts/3?q=abc#aa', { state: { x: 9 } }), 2000);
  return (
    <h1>
      <strong className='text-red-500'>{location.pathname}</strong> Page Not
      Found (404)
    </h1>
  );
  // return <Navigate to='/' />;
};