import { useEffect, useState } from "react";
import {useLoginMutation} from '../service/loginService.ts'
import { useNavigate, useNavigation } from "react-router-dom";



// interface LoginProps {
//   onLogin: (email: string, password: string) => void;
// }

export const Login: React.FC = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })
  const navigate= useNavigate();
const [login, { data, isLoading, isError, isSuccess }] = useLoginMutation();
console.log('success  ',isSuccess);
console.log('data  ',data);
console.log('error  ',isError);

useEffect(() => {
  if (isSuccess) {
    console.log('success  ',isSuccess);
    console.log('data  ',data);
    console.log('error  ',isError);
  }

  if(isSuccess ===true){
  
    navigate('/admin')
  }


}, [isSuccess, data, isError]);

  const handledChange = (e) => {
    console.log(userData);

    setUserData({...userData, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
      try { 
          const result = await login(userData).unwrap();
          localStorage.setItem('token', result.token);
          console.log('Login successful:', result);
         
     // Redirige a la página principal
  } catch (error) {
    console.error('Error during login:', error);

  }
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
             name="email"
              onChange={(e) => handledChange(e)}
              className="px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={(e) => handledChange(e)}
              className="px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
