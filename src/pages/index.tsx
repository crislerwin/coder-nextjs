import Link from 'next/link';
import { UserRegister } from '../components/userRegister';

const IndexPage: React.FC = () => {
  return (
    <>
      <div className="flex bg-gray-100 flex-col justify-center p-6">
        <Link href="/table">
          <a className="text-black-200 font-bold ">Tabelas</a>
        </Link>
      </div>
      <UserRegister />
    </>
  );
};
export default IndexPage;
