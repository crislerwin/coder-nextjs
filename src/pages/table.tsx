import { UserTable } from '../components/userTable';
import Link from 'next/link';
export default function Table() {
  return (
    <>
      <div className="flex bg-indigo-600 flex-col justify-center p-6 ">
        <Link href="/">
          <a className="text-white">Voltar</a>
        </Link>
      </div>
      <UserTable />
    </>
  );
}
