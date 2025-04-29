import Hero from "./components/Hero";
import ArrowLeft from "./components/icons/ArrowLeft";
import ArrowRight from "./components/icons/ArrowRight";
import LongArrowLeft from "./components/icons/LongArrowLeft";
import LongArrowRight from "./components/icons/LongArrowRight";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="my-5 flex justify-around items-center gap-10 p-2 md:p-6">
        <ArrowRight className="sm:hidden" />
        <LongArrowRight className="hidden sm:block"/>
        <h2 className=" uppercase text-center ">Work</h2>
        <ArrowLeft className="sm:hidden" />
        <LongArrowLeft className="hidden sm:block" />
      </div>
      <Work />
    </>
  );
}
