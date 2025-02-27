import React, { useState } from 'react';
import { useAddUser } from '../service/userService';

export const AddAdmin: React.FC = () => {
  const [name, setName] = useState("");
  const [lastName,setLastName]=useState("")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const [addUser,{isLoading,isError,isSuccess}] = useAddUser();

  const handleSubmit = async(event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    const newName = name.concat(" ",lastName);
   
    const newUser={
      "name": newName.toUpperCase(),
      "email": email,
      "password": password,
      "roles":["admin"]
  }
    try { await addUser( newUser ); } catch (error) { console.error('Error al agregar el usuario:', error); }


    console.log({ name,lastName, email, password });
  };
  // const { name, email, password, roles } = req.body;
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add Admin</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Apellido</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
       
        <div className="mb-4">
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirmar Contraseña</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
};


