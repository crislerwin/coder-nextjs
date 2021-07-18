import { useFetch } from '../hooks/useFetch';
import { User } from '../interfaces/User';

export const UserTable: React.FC<{}> = () => {
  const { data, error } = useFetch<User[]>('/user');
  if (!data) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className=" flex flex-col justify-center m-auto text-center ">
      <h1 className="m-6 font-bold text-4xl">Tabela de Usuários</h1>
      <table className="max-w-5xl mx-auto table-auto ">
        <thead className="justify-between">
          <tr className="bg-indigo-600 ">
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
            <td className="text-center ml-2 font-semibold">
              <span>{user.name}</span>
            </td>
            <td className="px-16 py-2 font-semibold">
              <span>{user.lastname}</span>
            </td>
            <td className="px-16 py-2 font-semibold">
              <span>{user.role}</span>
            </td>
            <td className="px-16 py-2 font-semibold">
              <span>{user.email}</span>
            </td>
          </tbody>
        ))}
      </table>
    </div>
  );
};
