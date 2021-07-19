import Link from 'next/link';
import { UserRegister } from '../components/userRegister';

const IndexPage: React.FC = () => {
  return (
    <>
      <div className=" flex flex-row justify-between  bg-gray-100 flex-shrink">
        <div className="p-6  flex-col flex-shrink justify-center">
          <div className="font-semibold p-2 mt-4 hover:bg-blue-600 rounded-md hover:text-gray-200 ">
            <Link href="/table">
              <a>Tabela</a>
            </Link>
          </div>
        </div>
        <div className="flex-grow justify-center m-4">
          <UserRegister />
        </div>
      </div>
    </>
  );
};
export default IndexPage;
