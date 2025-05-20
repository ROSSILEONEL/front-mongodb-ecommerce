
import React, { useState } from 'react';
import { useUpdateProduct } from '../service/productsService';
import { useGetProductById } from '../service/productsService';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const EditProduct: React.FC = () => {
  const [formData, setFormData] = useState({
    
    name: "",
    description: "",
    price: 0,
    image: "",
    stock: 0
  });

  const [shouldFetch, setShouldFetch] = useState(true);
  const [updateProduct, { isLoading, isError, isSuccess }] = useUpdateProduct();
  const { id } = useParams<{ id: string }>();
const { data: product, isLoading: isLoadingProduct, isError: isErrorProduct, isSuccess: isSuccessProduct } = useGetProductById(id as string,{skip: !shouldFetch});
console.log(product);
console.log(formData);
console.log(id);


const loadData = () => {
  if (product) {
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      stock: product.stock
    });
    setShouldFetch(true);
  }
}

  useEffect(() => {
    if (isSuccessProduct) {
      loadData();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    updateProduct({id,...formData});
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Precio</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Imagen (URL)</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>

        {isError && <p className="text-red-500 mt-4">Hubo un error al agregar el producto.</p>}
        {isSuccess && <p className="text-green-500 mt-4">¡Producto agregado con éxito!</p>}
      </form>
    </div>
  );
}
