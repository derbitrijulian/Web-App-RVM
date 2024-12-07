import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="relative">
      <Image src="/png/image-news1.png" alt="news1" width={609} height={609} />
      <div className="h-screen pt-[35px]">
        <div className="flex items-center justify-center">
          <Link href="/home" className=" absolute left-6 top-[44px]">
            <Image
              src="/svg/image-back.svg"
              alt="Back"
              width={14}
              height={25}
            />
          </Link>
          <h1 className="text-bgSecondary absolute font-semibold w-full text-center text-[20px] pb-6 pt-1">
            Berita
          </h1>
        </div>
      </div>
    </div>
  );
}
