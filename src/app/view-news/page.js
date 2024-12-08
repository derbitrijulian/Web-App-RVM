import Image from 'next/image';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <div className="relative h-screen pt-[35px]">
      {/* Background Image */}
      <Image
        src="/png/image-news1.png"
        alt="news 1"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />

      {/* Header */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-30">
        <div className="flex items-center justify-between p-4">
          {/* Back Button */}
          <Link href="/news">
            <button className="text-white">
              <Image
                src="/svg/image-back.svg"
                alt="Back"
                width={14}
                height={25}
              />
            </button>
          </Link>

          {/* Page Title */}
          <h1 className="text-bgSecondary font-semibold w-full text-start text-[24px] pb-6 pt-4 pl-7">
            Berita
          </h1>
        </div>

        {/* Content Section */}
        <div className="absolute bottom-0 bg-white rounded-t-3xl p-6">
          <h2 className="text-xl font-bold mb-2 text-primary">
            Sinar Mas Resmikan Reverse Vending Machine Di Kalibata Plaza
          </h2>
          <p className="text-primary mb-4">6 jam yang lalu</p>
          <p className="text-text-primary leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
