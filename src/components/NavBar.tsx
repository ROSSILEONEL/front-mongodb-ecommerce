import { Link } from "react-router-dom";
import cart from '../assets/cart.svg'

import { useSelector} from "react-redux";
import { RootState } from "../types";
export const NavBar = () => {


// console.log('CART',data);
// console.log('ERROR',error);
  // const token = useSelector((state: RootState)=> state.auth.token);
  // const userAuth = useSelector((state:  RootState)=> state.auth.user);

// console.log('token',token);
// console.log('userAuth',userAuth);


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
              Login
            </Link>
          </li>
          <li>
            <Link to="/admin" className="text-gray-300 hover:text-white">
              Admin
            </Link>
          </li>
        </ul>
        <div className="cart">
<img src={cart} className="w-7 h-7 ml-4" alt="" />
        <span>0</span>
        </div>

       </div>
      </div>
    </nav>
  );
};
