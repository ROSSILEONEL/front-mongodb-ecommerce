
import { useQuery } from "@tanstack/react-query";
import { Product } from "./Product";

  interface Product { _id: string; name: string; description: string; price: number; image: string; stock: number; createdAt: string; updatedAt: string; }
   const fetchProducts = async () => { 
    const response = await fetch('https://back-mongodb-ecommerce.onrender.com/products'); 
   const data = await response.json();
    if (!response.ok) {
       throw new Error(data.message);
       } return data; 
      }; 

    export const Productos = () => { 
      const { isLoading, data, error } = useQuery(
         {
          queryKey: ['todos'],
          queryFn: fetchProducts,
        }
      );

      if (isLoading) return <div>Loading...</div>; 
      
      if (error) return <div>Error: {error.message}</div>;
      
      return ( 
      <>
       <div className="p-4 gap-2 w-full grid justfy-evenly bg-gray-200 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]" >

        {data.map((product: Product) => ( 
          <Product key={product._id} product={product} />
        ))} 
        </div>
       </> 
       ); 
       };
