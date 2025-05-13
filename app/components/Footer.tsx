import ArrowLeft from "./icons/ArrowLeft";
import LongArrowLeft from "./icons/LongArrowLeft";
import ArrowRight from "./icons/ArrowRight";
import LongArrowRight from "./icons/LongArrowRight";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-5 flex flex-col gap-5">
      <div className="mt-5 flex justify-around items-center gap-10 p-2 md:p-6">
        <ArrowRight className="sm:hidden" />
        <LongArrowRight className="hidden sm:block" />
        <h2 className=" uppercase text-center whitespace-nowrap">
          Get in touch
        </h2>
        <ArrowLeft className="sm:hidden" />
        <LongArrowLeft className="hidden sm:block" />
      </div>
      <div className="flex sm:gap-2 justify-center items-center">
        <Image
          src="/images/logo2.png"
          alt="Juliana Ortegón"
          width={200}
          height={70}
        />
        <p className="leading-4 text-xs">
          <a href="tel:+573045233540">+57 3045233540</a> <br />
          Bogotá, Colombia <br />
          <a href="mailto:julianaortegonfuquen@gmail.com">
            julianaortegonfuquen@gmail.com
          </a>
        </p>
      </div>
      <div
        id="footer"
        className="font-medium text-white bg-black flex justify-evenly items-center py-10 px-4"
      >
        <a href="https://www.behance.net/julianaortegn" target="_blank">
          Behance
        </a>
        <div className="w-[2px] h-3 bg-white" />
        <a href="https://www.instagram.com/jo.makesense/" target="_blank">
          Instagram
        </a>
        <div className="w-[2px] h-3 bg-white" />
        <a href="https://www.linkedin.com/in/jo-makesense/" target="_blank">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
