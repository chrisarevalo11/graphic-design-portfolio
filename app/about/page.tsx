import ArrowLeft from "../components/icons/ArrowLeft";
import ArrowRight from "../components/icons/ArrowRight";
import LongArrowLeft from "../components/icons/LongArrowLeft";
import LongArrowRight from "../components/icons/LongArrowRight";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col p-2 md:p-0 gap-4">
      <div className="my-5 flex md:hidden justify-around items-center gap-10 md:p-6">
        <ArrowRight className="sm:hidden" />
        <LongArrowRight className="hidden sm:block" />
        <h2 className=" uppercase text-center whitespace-nowrap">About me</h2>
        <ArrowLeft className="sm:hidden" />
        <LongArrowLeft className="hidden sm:block" />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Image
          src="/images/about-me.png"
          alt="About"
          width={500}
          height={500}
          className="px-2 md:px-0 w-full sm:w-1/2 md:w-1/3 md:h-[800px] sm:flex-1 object-cover"
          priority
        />

        <div className="flex flex-col gap-4">
          <div className="my-5 md:flex items-center gap-5 md:p-2 hidden">
            <ArrowRight className="sm:hidden" />
            <LongArrowRight className="w-1/2" />
            <h2 className="uppercase text-center whitespace-nowrap">
              About me
            </h2>
            <ArrowLeft className="sm:hidden" />
            <LongArrowLeft className="w-1/2" />
          </div>

          <div className="px-2 flex flex-col gap-4 sm:flex-1 md:w-1/2 md:self-center md:justify-center">
            <h2>Hi!</h2>

            <p>
              I’m Juliana Ortegón, a{" "}
              <span className="italic font-medium">
                graphic designer and illustrator
              </span>{" "}
              from Bogotá, Colombia.
            </p>

            <p>
              I specialize in{" "}
              <span className="italic font-medium">
                analog illustration, information design, and data visualization
              </span>
              . Creating infographics, pictograms, and visual instructions that
              are{" "}
              <span className="italic font-medium">
                {" "}
                clear, inclusive, and visually compelling
              </span>
              .
            </p>

            <p>
              I recently completed my degree in Graphic Design at Universidad
              Jorge Tadeo Lozano, where I developed a strong focus on using{" "}
              <span className="italic font-medium">
                design as a tool for communication, reflection, and social
                change
              </span>
              . My work often engages with themes such as{" "}
              <span className="italic font-medium">
                historical memory, feminism, and environmental justice
              </span>
              . I’m especially drawn to projects that aim to inform, empower,and
              spark meaningful dialogue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
