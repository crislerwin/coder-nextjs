import { useFetch } from '../hooks/useFetch';

interface User {
  id: number;
  name: string;
  lastname: string;
  role: string;
  email: string;
}

const UserTable: React.FC<{}> = () => {
  const { data, error } = useFetch<User[]>('/user');
  if (!data) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="mt-2">
      <table className="max-w-5xl mx-auto table-autos">
        <thead className="justify-between">
          <tr className="bg-green-400">
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

export default UserTable;
