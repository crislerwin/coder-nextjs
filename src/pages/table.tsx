import { UserTable } from '../components/userTable';
import Link from 'next/link';
export default function Table() {
  return (
    <>
      <div className="flex  flex-col justify-center p-6 ">
        <Link href="/">
          <a className="text-black font-bold">Voltar</a>
        </Link>
      </div>
      <UserTable />
    </>
  );
}
