'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoHomeOutline } from 'react-icons/io5';
import { CiLocationOn, CiUser } from 'react-icons/ci';
import { FiActivity } from 'react-icons/fi';
import { BiNavigation } from 'react-icons/bi';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="bg-white border rounded-t-3xl mx-2 fixed -bottom-1 inset-x-0 shadow-navbar-shadow">
      <ul className="flex gap-4 justify-center items-center p-2 h-[85px]">
        <Link href="/home">
          <li
            className={`flex flex-col items-center ${
              isActive('/home') ? 'text-primary' : 'text-black'
            }`}
          >
            <div>
              <IoHomeOutline className="w-6 h-6" />
            </div>
            <span className={`text-xs font-medium`}>Beranda</span>
          </li>
        </Link>

        <Link href="/lokasi">
          <li
            className={`flex flex-col items-center ${
              isActive('/lokasi') ? 'text-primary' : 'text-black'
            }`}
          >
            <div className="pb-1">
              <CiLocationOn className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium">Lokasi</span>
          </li>
        </Link>

        <Link href={isActive('/lokasi') ? '/navigasi' : '/qr'}>
          <li className="flex flex-col items-center transform">
            <div
              className={`rounded-full p-6 ${
                isActive('/lokasi') ? 'bg-primary' : 'bg-primary'
              } -translate-y-11`}
            >
              {isActive('/lokasi') ? (
                <BiNavigation className="w-11 h-11 text-white" />
              ) : (
                <Image
                  src="/svg/icon-scan.svg"
                  alt="icon scan"
                  width={42}
                  height={42}
                />
              )}
            </div>
            <span className="-translate-y-9 text-xs font-medium text-black">
              {isActive('/lokasi') ? 'Navigasi' : 'Scan'}
            </span>
          </li>
        </Link>

        <Link href="/aktifitas">
          <li
            className={`flex flex-col items-center ${
              isActive('/aktifitas') ? 'text-primary' : 'text-black'
            }`}
          >
            <div className="pb-1">
              <FiActivity className="w-6 h-6" />
            </div>
            <span className={`text-xs font-medium`}>Aktifitas</span>
          </li>
        </Link>

        <Link href="/profil">
          <li
            className={`flex flex-col items-center ${
              isActive('/profil') ? 'text-primary' : 'text-black'
            }`}
          >
            <div>
              <CiUser className="w-6 h-6" />
            </div>
            <span
              className={`text-xs font-medium ${
                isActive('/profil') ? 'text-primary' : 'text-black'
              }`}
            >
              Profil
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
