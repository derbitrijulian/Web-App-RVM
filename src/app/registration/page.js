export default function Page() {
    return (
        <div className="bg-primary h-screen pt-[35px]">
            <div className="flex items-center justify-center">

                <button className="absolute left-8 top-[45px]">
                    <img
                        src="/svg/image-back.svg"
                        alt="Back"
                        className="w-5 h-5"
                    />
                </button>

                <h1 className="text-bgSecondary font-semibold w-full text-center text-[28px]">
                    Daftar
                </h1>
            </div>

            <p className="text-bgSecondary text-sm font-regular text-center text-[12px] pt-1 pb-4 px-12">
                Silahkan isi form untuk bergabung
            </p>

            <div className="bg-bgSecondary h-[547px] rounded-t-[36px] pt-20 px-9">

            </div>
        </div>
    )
}