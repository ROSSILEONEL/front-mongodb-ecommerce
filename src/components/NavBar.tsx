import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectAuth} from "../app/selectors.ts";
import {useEffect, useState} from "react";
import Cart from "./Cart.tsx";

export const NavBar = () => {

const userAuth = useSelector(selectAuth);
const [isAdmin, setIsAdmin] = useState(false);
console.log('USER AUTH DEL NAVBAR',userAuth.user);
const rolesA:[] = userAuth.user?.roles ;
console.log('ROLES',rolesA);


useEffect(() => {

  if (userAuth.user !== null) {
  rolesA.map((role) => {
   console.log('ROLE',role);
   if (role.name === 'admin'){
     setIsAdmin(true);
    }

     
      
    
  });
 
}

}
, [userAuth.user]);




  



  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-end">
        <div className="text-white font-bold text-xl">MiTienda</div>
        {/* {userAuth && <div className="text-white font-bold text-xl">{userAuth.name}</div>} */}
       <div className="flex justify-end">
         <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-gray-300 hover:text-white">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-gray-300 hover:text-white">
              {userAuth.user ? 'Mi cuenta' : 'Login'}
            </Link>
          </li>
          <li>
      {isAdmin && <Link to="/admin" className="text-gray-300 hover:text-white">
              Admin
            </Link>}
          </li>
      <li>

<Link to='/cart' className="text-gray-300 hover:text-white">
       <div className="flex justify-end h-full w-15">
<Cart />
       </div>
</Link>
      </li>
        </ul>
       
       </div>
      </div>
    </nav>
  );
};
