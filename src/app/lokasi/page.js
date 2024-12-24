import Image from 'next/image';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('../components/containers/maps/page'), {
  ssr: false,
});

export default function Lokasi() {
  return (
    <div className="px-5 mt-5">
        <Map />
      <div className="flex items-center h-12 bg-white rounded-xl shadow-md px-3">
        {/* Ikon Lokasi */}
        <Image
          src="/svg/icon-lokasi.svg"
          alt="icon lokasi"
          width={20}
          height={20}
        />

        {/* Input Lokasi */}
        <input
          type="text"
          placeholder="Masukkan lokasi"
          className="w-full ml-2 text-gray-700 placeholder-gray-400 focus:outline-none"
        />
      </div>
    </div>
  );
}
