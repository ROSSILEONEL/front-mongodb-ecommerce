import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectAuth} from "../app/selectors.ts";
import {useEffect, useState} from "react";
import cart from '../assets/cart.svg';
import {useGetCartItemsQuery} from "../service/cartService.ts";

export const NavBar = () => {

const userAuth = useSelector(selectAuth);
const [isAdmin, setIsAdmin] = useState(false);
console.log('USER AUTH DEL NAVBAR',userAuth.user);
const rolesA:[] = userAuth.user?.roles ;
console.log('ROLES',rolesA);
const { data: cartItems } = useGetCartItemsQuery(userAuth.user?.id);
console.log('cartItems',cartItems);


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

<Link to={`/cart/${userAuth.user?._id}`} className="text-gray-300 hover:text-white">
       <div className="flex justify-end h-full w-15">
    
    
    <div className="relative">
      <button className="relative p-0  text-white rounded-full hover:scale-110">
<img src={cart} className="w-7 h-7 ml-4" alt="" />
        
        {cartItems?.items.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cartItems.items.length} 
          </span>
        )}
      </button>
    </div>       </div>
</Link>
      </li>
        </ul>
       
       </div>
      </div>
    </nav>
  );
};
