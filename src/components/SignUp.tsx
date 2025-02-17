import React, { useState } from 'react';

type User = {
  name: string;
  email: string;
  password: string;
  roles: string[];
};

export const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [roles, setRoles] = useState<string[]>([]);

  const handleRoleChange = (role: string) => {
    setRoles((prevRoles) =>
      prevRoles.includes(role)
        ? prevRoles.filter((r) => r !== role)
        : [...prevRoles, role]
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const newUser: User = {
      name,
      email,
      password,
      roles,
    };

    console.log('Nuevo usuario:', newUser);
    alert('Usuario creado con éxito');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Agregar Usuario</h2>

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

        <div className="mb-4">
          <label className="block text-gray-700">Roles</label>
          <div className="flex flex-col gap-2">
            <label>
              <input
                type="checkbox"
                value="admin"
                checked={roles.includes('admin')}
                onChange={() => handleRoleChange('admin')}
              />
              Admin
            </label>
            <label>
              <input
                type="checkbox"
                value="user"
                checked={roles.includes('user')}
                onChange={() => handleRoleChange('user')}
              />
              User
            </label>
            <label>
              <input
                type="checkbox"
                value="moderator"
                checked={roles.includes('moderator')}
                onChange={() => handleRoleChange('moderator')}
              />
              Moderator
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Crear Usuario
        </button>
      </form>
    </div>
  );
};
