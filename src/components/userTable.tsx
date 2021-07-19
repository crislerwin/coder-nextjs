import { useFetch } from '../hooks/useFetch';
import { User } from '../interfaces/User';
import api from '../services/api';
export const UserTable: React.FC<{}> = () => {
  const { data, error } = useFetch<User[]>('/user');
  if (!data) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className=" min-h-screen flex flex-col justify-center  text-center m-4 ">
      <h1 className="m-6 font-bold text-4xl">Tabela de Usuários</h1>
      <table className="max-w-4xl mx-auto table-auto ">
        <thead className="justify-between">
          <tr className="bg-indigo-600 ">
            <th className="px-6 py-2">
              <span className="text-gray-100 font-semibold">Nome</span>
            </th>
            <th className="px-6 py-2">
              <span className="text-gray-100 font-semibold">Sobrenome</span>
            </th>
            <th className="px-6 py-2">
              {' '}
              <span className="text-gray-100 font-semibold">Cargo</span>
            </th>
            <th className="px-6 py-2">
              {' '}
              <span className="text-gray-100 font-semibold">Email</span>
            </th>
            <th className="px-6 py-2">
              {' '}
              <span className="text-gray-100 font-semibold">Ações</span>
            </th>
          </tr>
        </thead>
        {data.map((user) => (
          <tbody key={user.id} className="bg-gray-200">
            <td className="text-center ml-2 font-semibold">
              <span>{user.name}</span>
            </td>
            <td className="px-6 py-2 font-semibold">
              <span>{user.lastname}</span>
            </td>
            <td className="px-6 py-2 font-semibold">
              <span>{user.role}</span>
            </td>
            <td className="px-6 py-2 font-semibold">
              <span>{user.email}</span>
            </td>
            <td className="px-6 py-2">
              <a
                className=" font-semibold hover:bg-gray-100  text-red-400 hover:text-red-600 hover:font-medium cursor-pointer "
                onClick={async () => {
                  await api.delete(`/user/${user.id}`).then((res) => {
                    window.alert(
                      `Usuário ${user.name} ${user.lastname} excluido com sucesso`,
                    );
                    return res.data;
                  });
                }}
              >
                Excluir
              </a>
            </td>
          </tbody>
        ))}
      </table>
    </div>
  );
};
