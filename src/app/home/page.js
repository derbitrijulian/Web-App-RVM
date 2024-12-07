import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-primary h-screen">
      {/* Header */}
      <div className="px-8 pt-7">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/svg/image-splash.svg"
              alt="image splash"
              width={41}
              height={41}
            />
            <div>
              <h1 className="font-semibold text-white text-xl">Plastic - In</h1>
              <p className="font-regular text-white text-sm">Selamat Datang</p>
            </div>
          </div>
          <Image
            src="/svg/notification.svg"
            alt="notification"
            width={30}
            height={30}
          />
        </div>

        {/* Section Utama */}
        <div className="bg-bgSecondary rounded-[14px] px-4 py-4 mt-4 h-[140px]">
          <div className="items-center">
            <h1 className="text-text-primary">Botol Terkumpul</h1>
            <h2 className="text-primary font-semibold text-[16px]">0 pcs</h2>
          </div>
        </div>

        <div className="bg-primary rounded-[14px] px-4 py-4 mt-4 drop-shadow-xl -translate-y-20 h-[65px]">
          <div className="items-center">
            <h1 className="text-bgSecondary">Plastic-In Poin</h1>
            <h2 className="text-bgSecondary font-semibold text-[16px]">0</h2>
          </div>
        </div>
      </div>

      {/* Kontainer Putih Full Width */}
      <div className="bg-bgSecondary h-full rounded-t-[20px] -mt-16 p-7">
        {/* Bagian Lokasi Terdekat */}
        <div className="mb-4">
          <h1 className="text-lg font-bold text-text-primary">
            Lokasi Terdekat
          </h1>
          <div className="flex gap-4 overflow-x-auto mt-3 scrollbar-hide ">
            {/* Kartu Lokasi */}
            <div className="w-56 flex-shrink-0 bg-white rounded-[14px] p-4">
              <Image
                src="/png/image-rvm-tmii.png"
                alt="rvm-tmii"
                width={400}
                height={400}
                className="rounded-[14px]"
              />
              <div className="mt-2 text-text-primary">
                <h3 className="text-sm font-semibold">TMII - Jakarta</h3>
                <div className="flex flex-col gap-3 mt-3">
                  {/* Ikon Belum Penuh */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/svg/image-battery-green.svg"
                      alt="battery-green"
                      width={20}
                      height={20}
                    />
                    <p className="text-sm text-text-primary">Belum Penuh</p>
                  </div>
                  {/* Ikon Lokasi */}
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/svg/image-location.svg"
                        alt="location"
                        width={20}
                        height={20}
                      />
                      <p className="text-sm text-text-primary">2.7 Km</p>
                    </div>
                    <div>
                      <Link href="#">
                        <button className="px-6 py-2 bg-primary rounded-[8px] text-bgSecondary font-reguler text-xs">
                          Rute
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-56 flex-shrink-0 bg-white rounded-[14px] p-4">
              <Image
                src="/png/image-rvm-bsi.png"
                alt="rvm-bsi"
                width={400}
                height={400}
                className="rounded-[14px]"
              />
              <div className="mt-2 text-text-primary">
                <h3 className="text-sm font-semibold">BSI - Bambu Apus</h3>
                <div className="flex flex-col gap-3 mt-3">
                  {/* Ikon Hampir Penuh */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/svg/image-battery-yellow.svg"
                      alt="battery-yellow"
                      width={20}
                      height={20}
                    />
                    <p className="text-sm text-text-primary">Hampir Penuh</p>
                  </div>
                  {/* Ikon Lokasi */}
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/svg/image-location.svg"
                        alt="location"
                        width={20}
                        height={20}
                      />
                      <p className="text-sm text-text-primary">4 Km</p>
                    </div>
                    <div>
                      <Link href="#">
                        <button className="px-6 py-2 bg-primary rounded-lg text-bgSecondary font-reguler text-xs">
                          Rute
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-56 flex-shrink-0 bg-white rounded-[14px] p-4">
              <Image
                src="/png/image-rvm-cimuning.png"
                alt="rvm-cimuning"
                width={400}
                height={400}
                className="rounded-[14px]"
              />
              <div className="mt-2 text-text-primary">
                <h3 className="text-sm font-semibold">Cimuning - Bekasi</h3>
                <div className="flex flex-col gap-3 mt-3">
                  {/* Ikon Sudah Penuh */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/svg/image-battery-red.svg"
                      alt="battery-red"
                      width={20}
                      height={20}
                    />
                    <p className="text-sm text-text-primary">Sudah Penuh</p>
                  </div>
                  {/* Ikon Lokasi */}
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/svg/image-location.svg"
                        alt="location"
                        width={20}
                        height={20}
                      />
                      <p className="text-sm text-text-primary">6 Km</p>
                    </div>
                    <div>
                      <Link href="#">
                        <button className="px-6 py-2 bg-primary rounded-[8px] text-bgSecondary font-reguler text-xs">
                          Rute
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bagian Berita */}
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold mb-3">Berita</h1>
          <Link href="/news">
            <h2 className="text-primary text-sm cursor-pointer hover:underline">
              Lihat Semua
            </h2>
          </Link>
        </div>
        <div>
          <div className="w-full">
            <Image
              src="/png/image-news1.png"
              alt="news1"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
