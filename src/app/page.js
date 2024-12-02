import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary h-screen">
      <div className="pt-[220px]">
        <div className="grid place-items-center">
          <Image src="/svg/image-splash.svg" alt="image splash" width={179} height={179} />
        </div>
        <h1 className="font-semibold text-white w-full text-center text-[52.14px] pt-3">
          Plastic - In
        </h1>
      </div>
    </div>
  );
}
