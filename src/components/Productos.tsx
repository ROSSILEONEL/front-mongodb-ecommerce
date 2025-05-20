import {useGetAllProducts} from "../service/productsService";
import { Product } from "./Product";


  interface Product { 
    _id: string; 
    name: string; 
    description: string;
     price: number; 
     image: string;
      stock: number;
       createdAt: string;
        updatedAt: string;
       }


  

    export const Productos = () => { 
     
    const { data, error, isLoading } = useGetAllProducts();

      if (isLoading) return <div>Loading...</div>; 
      
      if (error) return <div>Error: {error.message}</div>;
      
      return ( 
      <>
       <div className="p-4 gap-2 w-full grid justfy-evenly bg-gray-900 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]" >

        {data.map((product: Product) => ( 
          <Product key={product._id} product={product} />
        ))} 
        </div>
       </> 
       ); 
       };
