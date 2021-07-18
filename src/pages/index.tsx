import Link from 'next/link';
import { UserLogin, UserTable } from '../components/userTable';

const IndexPage: React.FC = () => {
  return (
    <>
      <div className="flex bg-indigo-600 flex-col justify-center p-6">
        <Link href="/table">
          <a className="text-white">Tabelas</a>
        </Link>
      </div>
      <UserLogin />
    </>
  );
};
export default IndexPage;
