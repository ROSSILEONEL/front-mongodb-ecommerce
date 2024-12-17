
import { useParams } from 'react-router-dom'
import {useGetProductById} from '../service/productsService.ts'
import {useAddItemToCartMutation} from '../service/cartService.ts'
import { useState } from 'react'

export const ItemDetail = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetProductById(id);
    const [addItemToCart] = useAddItemToCartMutation();

    

  
   



      const userId = '667f1b585ac9245940317c29'
      const [qtt, setQtt] = useState(1);
      const [item, setItem] = useState(
        {
          userId: userId,
          productId: id,
          quantity: qtt}
      );

      const handledChange = (e) => {
        const value = e.target.value
        console.log(value);
        
        setQtt(value)
        setItem({...item, quantity: e.target.value})
      }

      const addToCart = (item)=>{
        const {quantity} = item
        console.log(typeof quantity);
        
        console.log(item);
        
        addItemToCart(item)
      }
    
  return (
    <>
    {isLoading && <div>Loading...</div>}
    {error && <div>Error: Cosas pasaron</div>}
    {data && (
        
<div className="bg-red max-w-sm rounded overflow-hidden shadow-lg p-4"> 
    <img className="w-full" src={data.image} alt={data.name} />
     
     <div className="px-6 py-4">
         
         <div className="font-bold text-xl mb-2">
            {data.name}
            </div> 
            <p className="text-gray-700 text-base">
                {data.description}
                </p> 
                <p className="text-gray-900 text-lg font-semibold">
                    ${data.price}</p>
                     <p className="text-gray-600 text-sm">
                        Stock: {data.stock}
                        </p> 
                        <div className="flex items-center mt-4">
                          <input type="number" value={qtt} onChange={ (e) => handledChange(e)} />
                            
                              <button onClick={() => addToCart(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                                 Add to Cart
                                  </button>
                                   </div>
                                    </div>
                                     </div>

    )}    </>
  )
}
