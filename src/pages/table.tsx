import { UserTable } from '../components/userTable';
import Link from 'next/link';
export default function Table() {
  return (
    <>
      <>
        <div className=" flex  bg-gray-100 ">
          <div className="p-6  flex-col flex-shrink justify-center">
            <div className="font-semibold p-2 mt-4 hover:bg-blue-600 rounded-md hover:text-gray-200 ">
              <Link href="/">
                <a>Voltar</a>
              </Link>
            </div>
          </div>
          <div className="flex-grow text-center">
            <UserTable />
          </div>
        </div>
      </>
    </>
  );
}
