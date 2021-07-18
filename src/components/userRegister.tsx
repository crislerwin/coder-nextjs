import { useForm } from 'react-hook-form';
import { User } from '../interfaces/User';
import api from '../services/api';

export const UserRegister = () => {
  const { register, handleSubmit } = useForm<User>();

  async function handleSignIn(user: User) {
    const { data } = await api.post('http://localhost:5500/user', user);
    if (data) {
      window.alert(
        `Usuario ${user.name} ${user.lastname} cadastrado com sucesso`,
      );
    }
  }

  return (
    <div className="flex bg-gray-100 justify-center flex-col text-center ">
      <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
        <h1 className="font-semibold text-4xl m-4">Formulário de Cadastro</h1>
        <div className="relative py-3 w-11/12 max-w-xl sm:mx-auto">
          <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
            <form className="w-full" onSubmit={handleSubmit(handleSignIn)}>
              <div className="mb-5 relative">
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  required
                  className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                  placeholder="Name"
                />
                <label className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
                  <a className="text-black font-semibold ">Nome</a>
                </label>
              </div>
              <div className="mb-5 relative">
                <input
                  {...register('lastname')}
                  type="text"
                  id="lastname"
                  required
                  className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                />
                <label className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
                  <a className="text-black font-semibold ">Sobrenome</a>
                </label>
              </div>
              <div className="mb-5 relative">
                <input
                  {...register('role')}
                  type="text"
                  id="role"
                  required
                  className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                  placeholder="role"
                />
                <label className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
                  <a className="text-black font-semibold ">Cargo</a>
                </label>
              </div>
              <div className="mb-5 relative">
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  required
                  className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
                  placeholder="email"
                />
                <label className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
                  <a className="text-black font-semibold ">Email</a>
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
