import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="bg-primary h-screen pt-[35px] ">

            <div className="flex items-center justify-center">

                <Link href="/onboarding" className="absolute left-8 top-[44px]">
                    <Image src="/svg/image-back.svg"
                        alt="Back" width={14} height={25} />
                </Link>

                <h1 className="text-bgSecondary font-semibold w-full text-center text-[28px]">
                    Selamat Datang
                </h1>
            </div>

            <p className="text-bgSecondary text-sm font-regular text-center text-[12px] pt-1 pb-4 pl-20 pr-20">
                Silahkan masuk atau daftar jika belum mempunyai akun
            </p>

            <div className="bg-bgSecondary h-[527px] rounded-t-[36px] pt-20 px-9">
                <div>
                    <label className="text-text-primary text-sm font-medium text-[15px]">
                        Nama Pengguna atau Email
                    </label>
                    <input
                        type="text"
                        placeholder="Masukkan Nama Pengguna atau Email"
                        className="mt-2 pl-3 pr-3 w-full p-3 border-[3px] border-secondary rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                </div>

                <div className="mt-6">
                    <label className="text-text-primary text-sm font-medium text-[15px] flex justify-between">
                        <span>Kata Sandi</span>
                        <Link href="/forgot-password">
                            <p className="text-primary text-[12px] cursor-pointer">
                                Lupa Password?
                            </p>
                        </Link>
                    </label>

                    <input
                        type="text"
                        placeholder="Masukkan Kata Sandi"
                        className="mt-2 pl-3 pr-3 w-full p-3 border-[3px] border-secondary rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                </div>

                <div className="grid justify-center gap-3 pt-12 pb-10">
                    <Link href="/login">
                        <button className="py-3 bg-primary rounded-full w-52 text-bgSecondary font-semibold text-xl">Masuk</button>
                    </Link>

                    <Link href="/registration">
                        <button className="py-3 bg-secondary rounded-full w-52 text-text-primary font-semibold text-xl">Daftar</button>
                    </Link>
                </div>
            </div>
        </div>


    )
}