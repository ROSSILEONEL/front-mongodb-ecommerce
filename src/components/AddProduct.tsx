// import React, { useState } from 'react';
// import { useAddProduct } from '../service/productsService';

// export const AddProduct: React.FC = () => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState(0);
//   const [image, setImage] = useState("");
//   const [stock, setStock] = useState(0);

//   const [addProduct,{ data, isLoading, isError, isSuccess }]= useAddProduct();
 
 
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     // Aquí puedes manejar el envío del formulario, como enviarlo a un servidor
//     console.log({ name, description, price, image, stock });
// const product = {
//   name: name,
//   description: description,
//   price: price,
//   image: image,
//   stock: stock
//     // Llamar al hook useAddProduct para agregar un nuevo producto
//   };
// addProduct(product); 
// }



//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Add Product</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700">Nombre</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Descripción</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Precio</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(Number(e.target.value))}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Imagen (URL)</label>
//           <input
//             type="text"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Stock</label>
//           <input
//             type="number"
//             value={stock}
//             onChange={(e) => setStock(Number(e.target.value))}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Enviar
//         </button>
//       </form>
//     </div>
//   );
// }


// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
import React, { useState } from 'react';
import { useAddProduct } from '../service/productsService';

export const AddProduct: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    stock: 0
  });

  const [addProduct, { isLoading, isError, isSuccess }] = useAddProduct();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addProduct(formData);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        
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
