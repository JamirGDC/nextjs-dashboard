'use client';
import {
  UserGroupIcon,
}
from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FaHome  } from "react-icons/fa";


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Perfil', href: '/dashboard', icon: FaHome },
  { name: 'Cuentas', href: '/dashboard/customers', icon: UserGroupIcon },

];

export default function NavLinksAdmin() {
  const pathname = usePathname();
  return (
    <>
      <p className={`p-3 font-bold text-[12px]`}>Administración</p>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[54px] grow items-center justify-center gap-2 rounded-2xl bg-gray-50 p-3 text-[12px] font-bold hover:bg-white hover:text-[#4FD1C5] md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-white': pathname === link.href,
              },
            )}
          >
            <div
                className={clsx('w-[30px] h-[30px] rounded-[12px] flex items-center justify-center ', {'bg-[#4FD1C5] w-[30px] h-[30px] rounded-[12px] flex items-center justify-center': pathname === link.href})}>
            <LinkIcon className={clsx('w-[15px]', {
              'text-white': pathname === link.href,
              'text-[#4FD1C5]': pathname !== link.href
            })}/></div>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
