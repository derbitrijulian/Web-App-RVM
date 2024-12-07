'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="bg-primary h-screen pt-[34px]">
      <div className="flex items-center justify-center">
        <Link href="/login" className="absolute left-8 top-[44px]">
          <Image src="/svg/image-back.svg" alt="Back" width={14} height={25} />
        </Link>

        <h1 className="text-bgSecondary font-semibold w-full text-center text-[28px]">
          Daftar
        </h1>
      </div>

      <p className="text-bgSecondary text-sm font-regular text-center text-[12px] pt-1 pb-4 px-12">
        Silahkan isi form untuk bergabung
      </p>

      <form>
        <div className="bg-bgSecondary h-full rounded-t-[36px] pt-20 px-9">
          <div>
            <label
              className="text-text-primary text-sm font-medium required:bg-red-500"
              htmlFor="email"
            >
              Nama Lengkap
            </label>
            <input
              required
              type="text"
              placeholder="Masukkan Nama Pengguna"
              className="mt-2 pl-3 pr-3 w-full p-3 border-[3px] border-secondary rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="mt-3">
            <label className="text-text-primary text-sm font-medium">
              <h1>Email</h1>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Masukkan Email"
              className="mt-2 pl-3 pr-3 w-full p-3 border-[3px] border-secondary rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="mt-3">
            <label className="text-text-primary text-sm font-medium">
              Kata Sandi
            </label>
            <input
              type="text"
              placeholder="Masukkan Kata Sandi"
              className="mt-2 pl-3 pr-3 w-full p-3 border-[3px] border-secondary rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="mt-3">
            <label className="text-text-primary text-sm font-medium">
              Konfirmasi Kata Sandi
            </label>
            <input
              type="text"
              placeholder="Konfirmasi Kata Sandi"
              className="mt-2 pl-3 pr-3 w-full p-3 border-[3px] border-secondary rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="mt-3">
            <label className="text-text-primary text-sm font-medium">
              Nomor Hp
            </label>
            <input
              type="text"
              placeholder="Masukkan No Hp"
              className="mt-2 pl-3 pr-3 w-full p-3 border-[3px] border-secondary rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <h1 className="text-text-primary text-xs font-medium py-3">
              *tanda Kolom wajib diisi
            </h1>
            <div className="flex items-start gap-5 px-6">
              <div className="inline-flex items-center">
                <label className="flex items-center cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-text-primary checked:border-slate-800"
                    id="check"
                  />
                  <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </label>
              </div>

              <div className="text-xs font-normal w-full">
                <span>
                  Setuju dengan <br />{' '}
                </span>
                <span>
                  <Link
                    href="/syarat-ketentuan"
                    className="hover:underline text-primary"
                  >
                    Syarat dan Ketentuan
                  </Link>{' '}
                  serta{' '}
                  <Link
                    href="kebijakan-privasi"
                    className="hover:underline text-primary w-full"
                  >
                    Kebijakan Privasi
                  </Link>{' '}
                </span>
              </div>
            </div>
          </div>
          <div className="grid justify-center gap-3 pt-8 pb-3">
            <Link href="/login">
              <button className="py-3 bg-primary rounded-xl w-52 text-bgSecondary font-semibold text-xl">
                Daftar
              </button>
            </Link>
          </div>
          <div className="text-xs font-normal w-full flex justify-center pb-14">
            <span>
              Sudah Punya akun ?{' '}
              <Link
                href="/registration"
                className="hover:underline text-primary w-full"
              >
                Masuk
              </Link>
            </span>
          </div>
        </div>
        {/* <button type="submit">
                    test
                </button> */}
      </form>
    </div>
  );
}
