import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-primary h-screen pt-[35px] ">
      <div className="flex items-center justify-center">
        <Link href="/login" className="absolute left-8 top-[44px]">
          <Image src="/svg/image-back.svg" alt="Back" width={14} height={25} />
        </Link>

        <h1 className="text-bgSecondary font-semibold w-full text-center text-[28px] pb-6 pt-1">
          Lupa Kata Sandi?
        </h1>
      </div>

      <div className="bg-bgSecondary h-[559px] rounded-t-[36px] pt-20 px-9">
        <div>
          <h1 className="text-text-primary font-semibold text-[20px]">
            Lupa Kata Sandi?
          </h1>

          <p className="text-text-primary font-regular text-[10px] pt-3 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div>
          <label className="text-text-primary text-sm font-medium text-[15px]">
            Masukkan alamat Email
          </label>
          <input
            type="text"
            id="email"
            input="email"
            placeholder="Masukkan alamat Email"
            className="mt-2 pl-3 pr-3 w-full p-3 border-[3px] border-secondary rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="grid justify-center gap-3 pt-5 pb-3">
          <Link href="/new-password">
            <button className="py-3 bg-primary rounded-xl w-52 text-bgSecondary font-semibold text-xl">
              Verifikasi
            </button>
          </Link>
        </div>

        <div className="text-text-primary text-xs font-regular w-full flex justify-center pb-14">
          <span>
            Belum punya akun ?{' '}
            <Link
              href="/registration"
              className="hover:underline text-primary w-full"
            >
              Masuk
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
