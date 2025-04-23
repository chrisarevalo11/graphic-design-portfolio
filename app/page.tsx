import Hero from "./components/Hero";
import LongArrowLeft from "./components/icons/LongArrowLeft";
import LongArrowRight from "./components/icons/LongArrowRight";
import Work from "./components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="my-5 flex justify-around items-center">
        <LongArrowRight />
        <h2 className=" uppercase text-center ">Work</h2>
        <LongArrowLeft />
      </div>
      <Work />
    </main>
  );
}
