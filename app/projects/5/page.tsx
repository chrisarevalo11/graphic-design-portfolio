"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Page() {
  const [showMore, setShowMore] = useState(false);
  const moreInfoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = moreInfoRef.current;
      if (!el) return;
      if (showMore) {
        gsap.to(el, {
          height: el.scrollHeight,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            el.style.height = "auto";
          },
        });
      } else {
        gsap.to(el, {
          height: 0,
          duration: 0.5,
          ease: "power2.in",
        });
      }
    },
    { dependencies: [showMore], scope: moreInfoRef }
  );

  return (
    <main className="flex flex-col gap-3">
      <div className="flex flex-col md:flex-row md:px-5">
        <section className="h-[80vh] relative flex items-end md:flex-1">
          <Image
            src="/images/project-5/cover.png"
            alt="Between feathers and skin"
            width={1000}
            height={1000}
            priority
            className="h-full object-cover absolute inset-0 z-0"
          />
        </section>
        <section className="mt-5 px-4 flex flex-col sm:flex-row md:flex-col gap-3 md:gap-8 md:flex-1">
          <div className="flex flex-col gap-3 md:gap-8 flex-1 md:flex-0">
            <h1 className="text-2xl font-medium">Between feathers and skin</h1>
            <p className="sm:hidden">
              A watercolor sketch series that blends observation, intuition, and
              a deep love for nature. An exercise to represent natural subjects
              with color, detail, and personality.
            </p>
            <div className="flex gap-3 flex-col ">
              <div>
                <h2 className="font-semibold uppercase">Project Type</h2>
                <p>Practice Illustration</p>
              </div>
              <div>
                <h2 className="font-semibold uppercase">Technique</h2>
                <p>Watercolor</p>
              </div>
              <div>
                <h2 className="font-semibold uppercase">Topics</h2>
                <p>Nature, wildlife, observation, biodiversity</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-8 flex-1 md:flex-0">
            <p className="hidden sm:block">
              A watercolor sketch series that blends observation, intuition, and
              a deep love for nature. An exercise to represent natural subjects
              with color, detail, and personality.
            </p>
            <button
              className="cursor-pointer border py-1 border-black uppercase text-left px-3 flex gap-2 items-center"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? <BiMinus /> : <BiPlus />} More info
            </button>
            <div
              ref={moreInfoRef}
              style={{ overflow: "hidden", height: 0 }}
              className={"flex flex-col gap-3"}
            >
              <p>
                This series of five watercolor illustrations was created as a
                hands-on exercise based on animal photographs found online.
                While not intended as detailed anatomical studies, each piece
                aims to faithfully capture the beauty and character of each
                species with a balance of realism and expressive style.
              </p>
              <p>
                This exercise helped me develop my sense of composition, color
                blending, and visual observation. Though these are sketches
                rather than finished compositions, they demonstrate my ability
                to illustrate wildlife and natural themes skills I can apply to
                projects like infographics, educational materials, and
                nature-focused storytelling.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col gap-3">
        <Image
          src="/images/project-5/foto-1.png"
          alt="Between feathers and skin"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
        <div className="grid sm:grid-cols-2 gap-3 lg:gap-0">
          <Image
            src="/images/project-5/foto-2.png"
            alt="Between feathers and skin"
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
          <Image
            src="/images/project-5/foto-6.png"
            alt="Between feathers and skin"
            width={1000}
            height={1000}
            className="w-full object-cover hidden sm:block"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-3">
          <Image
            src="/images/project-5/foto-3.png"
            alt="Between feathers and skin"
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
          <Image
            src="/images/project-5/foto-4.png"
            alt="Between feathers and skin"
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
          <Image
            src="/images/project-5/foto-5.png"
            alt="Between feathers and skin"
            width={1000}
            height={1000}
            className="w-full object-cover col-span-2 lg:col-span-1"
          />
        </div>
        <Image
          src="/images/project-5/foto-6.png"
          alt="Between feathers and skin"
          width={1000}
          height={1000}
          className="w-full object-cover sm:hidden"
        />
      </section>
    </main>
  );
}
