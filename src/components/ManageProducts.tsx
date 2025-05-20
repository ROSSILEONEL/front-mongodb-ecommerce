import { useGetAllProducts,useDeleteProduct } from "../service/productsService";
import { useEffect } from "react";
import { Link } from "react-router-dom";


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

export const ManageProducts = () => {
    const [deleteProduct] = useDeleteProduct();
    const { data, error, isLoading } = useGetAllProducts();
    
 

  const handleEdit =  (productId: string) => {
    console.log("Editar   producto con ID:", productId);
    // Lógica para editar stock
  };

  const handleDelete = async (productId: string) => {
    console.log("Eliminar producto con ID:", productId);
    try {
        
       await deleteProduct(productId).unwrap();
    } catch (error) {
        console.log("Error al eliminar el producto:", error);
        
    }
    // Lógica para eliminar producto
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Gestión de Productos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Imagen</th>
              <th className="py-2 px-4 border-b">Nombre</th>
              <th className="py-2 px-4 border-b">Descripción</th>
              <th className="py-2 px-4 border-b">Precio</th>
              <th className="py-2 px-4 border-b">Stock</th>
              <th className="py-2 px-4 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((product: Product) => (
              <tr key={product._id} className="text-center">
                <td className="py-2 px-4 border-b">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded mx-auto"
                  />
                </td>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">{product.description}</td>
                <td className="py-2 px-4 border-b">${product.price.toFixed(2)}</td>
                <td className="py-2 px-4 border-b"><input type="number" value={product.stock} className="w-16" /></td>
                <td className="py-2 px-4 border-b flex gap-2 justify-center">
            <Link to={`/admin/editProduct/${product._id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                    Editar
                   </Link>
                  {/*  */}
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
