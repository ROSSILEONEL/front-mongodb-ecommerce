import { ProductProp } from "../types";
import { Link } from "react-router-dom";

export const Product: React.FC<{ product: Product }> = ( {product} ) => {

  return ( 

<>
<Link to={`/products/${product._id}`}>
<div className="max-w-[300px] min-w-[380px] rounded overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "> 

    <div className="image  p-2 ">
      <img className=" p-1 max-w-full min-w-full max-h-[200px] object-cover" src={product.image} alt={product.name} />
    </div>


    <div className="px-6 py-4  max-h-sm min-h-sm"> 
      <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {product.name}
      </div>

      <div className="info flex justify-between flex-col min-h-[8rem] max-h-[8rem]">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 min-h-[3rem] max-h-[3rem]">{product.description}</p>
        <br />
        <p className="text-green-500 text-lg font-semibold min-h-[1rem] max-h-[1rem]">Price: ${product.price}</p>
        <br />
        <p className="text-gray-500 text-sm">In Stock: {product.stock}</p>
      </div> 
        
    </div>

    <div className="button-card flex justify-center p-2">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Add to Cart</button>
    </div>


        </div>
</Link>
</> ) 
          };



