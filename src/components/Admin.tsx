
import {  useSelector } from "react-redux";
import { selectAuth } from "../app/selectors.ts";

export const Admin = () => {


  const authData = useSelector(selectAuth);


    const handleClick = () => {
       
        
    }
  return (
    <div>
<h2>BIENVENIDO {authData.user}</h2>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Admin</button>
    </div>
  )
}
