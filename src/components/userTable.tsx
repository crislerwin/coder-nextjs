/* eslint-disable react-hooks/rules-of-hooks */
import { useFetch } from '../hooks/useFetch';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import api from '../services/api';

interface User {
  id: number;
  name: string;
  lastname: string;
  role: string;
  email: string;
}

export const UserTable: React.FC<{}> = () => {
  const { data, error } = useFetch<User[]>('/user');
  if (!data) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="min-h-screen flex flex-col justify-center m-4">
      <table className="max-w-5xl mx-auto table-auto ">
        <thead className="justify-between">
          <tr className="bg-indigo-600">
            <th className="px-16 py-2">
              <span className="text-gray-100 font-semibold">ID</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-100 font-semibold">Nome</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-100 font-semibold">Sobrenome</span>
            </th>
            <th className="px-16 py-2">
              {' '}
              <span className="text-gray-100 font-semibold">Cargo</span>
            </th>
            <th className="px-16 py-2">
              {' '}
              <span className="text-gray-100 font-semibold">Email</span>
            </th>
          </tr>
        </thead>
        {data.map((user) => (
          <tbody key={user.id} className="bg-gray-200">
            <tr className="px-16 py-2 flex flex-row items-center">
              <td>{user.id}</td>
            </tr>

            <td className="text-center ml-2 font-semibold">
              <span>{user.name}</span>
            </td>
            <td className="px-16 py-2">
              <span>{user.lastname}</span>
            </td>
            <td className="px-16 py-2">
              <span>{user.role}</span>
            </td>
            <td className="px-16 py-2">
              <span>{user.email}</span>
            </td>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export const UserLogin = () => {
  const { register, handleSubmit } = useForm();

  async function handleSignIn(data) {
    const response = await api
      .post('http://localhost:5500/user', data)
      .then((res) => {
        res.data;
      });
    return response;
  }

  return (
    <div className="flex bg-gray-100 justify-center flex-col text-center mt-4">
      <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
        <h1 className="font-semibold text-xl m-4">Cadastre o usuário</h1>
        <div className="relative py-3 w-11/12 max-w-xl sm:mx-auto">
          <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
            <form className="w-full" onSubmit={handleSubmit(handleSignIn)}>
              <div className="mb-5 relative">
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                  placeholder="Name"
                />
                <label className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
                  Nome
                </label>
              </div>
              <div className="mb-5 relative">
                <input
                  {...register('lastname')}
                  type="text"
                  id="lastname"
                  className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                  placeholder="Sobrenome"
                />
                <label className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
                  Sobrenome
                </label>
              </div>
              <div className="mb-5 relative">
                <input
                  {...register('role')}
                  type="text"
                  id="role"
                  className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                  placeholder="role"
                />
                <label className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
                  Cargo
                </label>
              </div>
              <div className="mb-5 relative">
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                  placeholder="email"
                />
                <label className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
                  E-mail
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-3 rounded-md"
              >
                <a className="b text-white px-4 py-2">Enviar</a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
