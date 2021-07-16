import { useFetch } from '../hooks/useFetch';

interface User {
  id: number;
  name: string;
  lastname: string;
  role: string;
  email: string;
}

const App: React.FC<{}> = () => {
  const { data } = useFetch<User[]>('/user');
  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          {user.name}
          {user.lastname}
          {user.email}
          {user.role}
        </li>
      ))}
    </ul>
  );
};

export default App;
