'use client';
import OptionItem from '@/components/containers/option-items';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="bg-primary h-screen pt-[35px]">
      {/* Header */}
      <div className="justify-center">
        <h1 className="text-bgSecondary font-semibold w-full text-center text-[24px] pb-6 pt-1">
          Profil
        </h1>
      </div>

      {/* Profile Section */}
      <div className="bg-bgSecondary h-full rounded-t-[36px] pt-10 px-9 pb-8 mt-20 relative">
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <div className="absolute -top-16 w-[130px] h-[130px] rounded-full bg-text-primary flex items-center justify-center">
            <Image
              src="/svg/icon-user.svg"
              alt="icon user"
              width={130}
              height={130}
            />
            {/* Edit Icon */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Link href="/edit">
                <Image
                  src="/svg/icon-edit.svg"
                  alt="edit"
                  width={14}
                  height={14}
                />
              </Link>
            </div>
          </div>

          {/* Username */}
          <h1 className="text-text-primary font-semibold text-2xl mt-[60px] mb-6">
            @Comefeelme
          </h1>

          {/* Options */}
          <div className="grid gap-y-7 text-center w-full mt-20">
            <OptionItem
              icon="/svg/icon-password.svg"
              text="Ubah Kata Sandi"
              href="/forgot-password"
            />
            <OptionItem
              icon="/svg/icon-terms.svg"
              text="Syarat & Ketentuan"
              href="/syarat-ketentuan?callback=/profil"
            />
            <OptionItem
              icon="/svg/icon-about.svg"
              text="Tentang Kami"
              href="#"
            />
            <OptionItem
              icon="/svg/icon-privacy.svg"
              text="Kebijakan Privasi"
              href="/kebijakan-privasi"
            />
          </div>
          <div className="grid justify-center pt-36 pb-6">
            <button
              type="submit"
              className="py-3 bg-primary rounded-xl w-52 text-bgSecondary font-semibold text-xl"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
