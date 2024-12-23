import Image from 'next/image';
import Link from 'next/link';

export default function RedeemGopayPage() {
  return (
    <div className="bg-primary pt-[35px] min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="flex justify-between items-center px-5">
        <div className="flex items-center gap-2">
          <Link href="/reedem-decision">
            <Image
              src="/svg/image-back.svg"
              alt="Back"
              width={14}
              height={25}
            />
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-1">
            <Image
              src="/svg/icon-poin.svg"
              alt="Points"
              width={23}
              height={26.6}
            />
            <span className="text-white text-lg font-regular">112</span>
          </div>
          <span className="text-white text-sm font-regular">Poin Saya</span>
        </div>
      </div>

      <h1 className="text-center font-semibold mt-5 text-white text-3xl mb-12">
        BCA
      </h1>

      {/* Content Section */}
      <div className="bg-bgSecondary border  rounded-t-[36px] p-5">
        {/* Success Icon */}
        <div className="bg-white rounded-t-lg shadow-lg px-4 pb-14">
          <div className="flex justify-center ">
            <div className=" -translate-y-5 p-3 rounded-full bg-white shadow-xl">
              <Image
                src="/svg/icon-success.svg"
                alt="icon success"
                width={32}
                height={32}
              />
            </div>
          </div>

          {/* Success Message */}
          <h2 className="text-xl font-semibold mt-6 mb-2 text-center">
            Redeem Berhasil!
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Redeem anda telah berhasil dilakukan.
          </p>

          {/* Total Redeem */}
          <div className="text-lg font-bold mb-4 text-center">Total Redeem</div>
          <div className="text-2xl font-semibold text-primary mb-6 text-center">
            IDR 10.000
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-4 text-left text-sm">
            <div className="border shadow-sm p-3 rounded-lg">
              <p className="font-semibold text-gray-500">Nomor</p>
              <p>712xxxxxxx</p>
            </div>
            <div className="border shadow-sm p-3 rounded-lg">
              <p className="font-semibold text-gray-500">Waktu</p>
              <p>25 Feb 2023, 13:22</p>
            </div>
            <div className="border shadow-sm p-3 rounded-lg">
              <p className="font-semibold text-gray-500">Nama</p>
              <p>Anto</p>
            </div>
            <div className="border shadow-sm p-3 rounded-lg">
              <p className="font-semibold text-gray-500">Rekening</p>
              <p>BCA</p>
            </div>
          </div>

          {/* Activity Link */}
          <Link href="/aktifitas">
            <div className="text-[#616161] text-[12px] cursor-pointer hover:underline pt-12 text-center">
              Lihat Aktivitas
            </div>
          </Link>
        </div>

        {/* Home Button */}
        <Link href="/home" className="flex justify-center">
          <button className="mt-10 py-3 px-9 bg-primary rounded-xl text-white font-semibold text-xl">
            Beranda
          </button>
        </Link>
      </div>
    </div>
  );
}
