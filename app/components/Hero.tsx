'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative !h-[95vh] flex justify-center py-20">
      <Image
        src="/images/hero.png"
        alt="Hero Image"
        width={1400}
        height={900}
        priority
        className="h-full w-full object-cover absolute inset-0 z-0"
      />
      <div className="w-[60%] my-5 z-10 flex flex-col gap-10 items-start md:items-center text-gray-hero">
        <p className="text-2xl max-w-[500px] md:text-center">
          “Se habla del <span className="font-serif italic">pensamiento</span>{" "}
          como algo primordial que{" "}
          <span className="font-serif italic">procede a la creación misma</span>
          ”.
        </p>
        <button
          className="text-xl flex gap-3 items-center cursor-pointer"
          onClick={() => router.push("/about")}
        >
          ABOUT{" "}
          <Image src="/images/Arrow.svg" alt="Arrow" width={40} height={20} />
        </button>
      </div>
    </section>
  );
}
