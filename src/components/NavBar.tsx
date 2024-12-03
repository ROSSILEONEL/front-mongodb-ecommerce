import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">MiTienda</div>
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
            <Link to="/ejemplo" className="text-gray-300 hover:text-white">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
