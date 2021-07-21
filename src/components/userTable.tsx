import { useFetch } from '../hooks/useFetch';
import { User } from '../interfaces/User';
import api from '../services/api';
import { useRouter } from 'next/router';
export const UserTable: React.FC<{}> = () => {
  const { data, error } = useFetch<User[]>('/user');
  const router = useRouter();
  if (!data) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="  flex flex-col justify-center text-center m-4  ">
      <table className="max-w-4xl mx-auto table-auto ">
        <thead className="justify-between ">
          <tr className="bg-blue-800 ">
            <th className="px-12 py-2">
              <span className="text-gray-100 font-semibold">Nome</span>
            </th>
            <th className="px-12 py-2">
              <span className="text-gray-100 font-semibold">Sobrenome</span>
            </th>
            <th className="px-12 py-2">
              {' '}
              <span className="text-gray-100 font-semibold">Cargo</span>
            </th>
            <th className="px-12 py-2">
              {' '}
              <span className="text-gray-100 font-semibold">Email</span>
            </th>
            <th className="px-12 py-2">
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
            <td className="px-12 py-2 font-semibold">
              <span>{user.lastname}</span>
            </td>
            <td className="px-12 py-2 font-semibold">
              <span>{user.role}</span>
            </td>
            <td className="px-12 py-2 font-semibold">
              <span>{user.email}</span>
            </td>
            <td className="px-12 py-2">
              <a
                className=" font-semibold   text-red-400 hover:text-red-600 hover:font-medium cursor-pointer "
                onClick={() => {
                  api.delete(`/user/${user.id}`).then((res) => {
                    window.alert(
                      `Usuário ${user.name} ${user.lastname} excluido com sucesso`,
                    );
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
