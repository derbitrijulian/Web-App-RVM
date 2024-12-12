import Image from 'next/image';
import Link from 'next/link';

export default function RedeemPage() {
  return (
    <div className="bg-primary pt-[35px]">
      {/* Header Section */}
      <div className="flex justify-between items-center px-5">
        <div className="flex items-center gap-2">
          <Link href="/home">
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
            <span className="text-white text-lg font-regular">0</span>
          </div>
          <span className="text-white text-sm font-regular">Poin Saya</span>
        </div>
      </div>

      <h2 className="text-center font-semibold mt-5 text-white text-3xl">
        Redeem
      </h2>

      {/* Content Section */}
      <div className="bg-bgSecondary h-screen rounded-t-[36px] pt-10 mt-10">
        <div className="grid gap-6 px-5">
          {/* Voucher Card */}
          <div className="bg-primary flex items-center rounded-xl px-8 py-14 gap-7 text-white">
            <div className="">
              <p className="text-sm font-medium text-[13px] text-nowrap">
                Tukar Plastic-In Poin senilai
              </p>
              <h3 className="text-[40px] font-medium">10.000</h3>
              <div className="w-[140px] px-3 py-2 text-nowrap text-xs bg-bgSecondary text-primary rounded-xl">
                <p className="">11250 Plastic-In poin</p>
              </div>
            </div>
            <div className="w-[50px] h-[50px] bg-bgSecondary rounded-lg"></div>
          </div>

          <div className="bg-gray-300 rounded-xl pl-8 py-14 text-gray-500 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-[13px]">
                Tukar Plastic-In Poin senilai
              </p>
              <h3 className="text-[40px] font-medium">25.000</h3>
              <p className="text-xs">26250 Plastic-In poin</p>
            </div>
          </div>

          <div className="bg-gray-300 rounded-xl pl-8 py-14 text-gray-500 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">
                Tukar Plastic-In Poin senilai
              </p>
              <h3 className="text-[40px] font-medium">50.000</h3>
              <p className="text-xs">51250 Plastic-In poin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
