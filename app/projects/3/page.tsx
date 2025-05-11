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
        <section className="h-[80vh] relative flex items-start md:flex-1">
          <Image
            src="/images/project-3/cover.png"
            alt="Las cicatrices"
            width={1000}
            height={1000}
            priority
            className="h-full object-cover absolute inset-0 z-0"
          />
          <p className="py-5 text-sm sm:text-base w-full text-center px-[10%] z-10 text-white bg-gray-hero/60 font-mono">
            “Las cicatrices, pues,
            <br /> son las costuras de la memoria...”
            <br />
            <span className="font-bold">Piedad Bonnett</span>
          </p>
        </section>
        <section className="mt-5 px-4 flex flex-col sm:flex-row md:flex-col gap-3 md:gap-8 md:flex-1">
          <div className="flex flex-col gap-3 md:gap-8 flex-1 md:flex-0">
            <h1 className="text-2xl font-medium">Las cicatrices</h1>
            <p className="sm:hidden">
              An illustrated leporello weaving poetry and collective memory
              around Colombia&apos;s armed conflict.
            </p>
            <div className="flex gap-3 flex-col ">
              <div>
                <h2 className="font-semibold uppercase">Project Type</h2>
                <p>Illustrated leporello</p>
              </div>
              <div>
                <h2 className="font-semibold uppercase">Technique</h2>
                <p>Analog illustration + digital composition</p>
              </div>
              <div>
                <h2 className="font-semibold uppercase">Topics</h2>
                <p>Memory, armed conflict, symbolic reparation</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-8 flex-1 md:flex-0">
            <p className="hidden sm:block">
              An illustrated leporello weaving poetry and collective memory
              around Colombia&apos;s armed conflict.
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
                Las Cicatrices is an illustrated leporello that offers a
                personal interpretation of the poem{" "}
                <span className="font-semibold">
                  Las cicatrices by Piedad Bonnett
                </span>
                , in conversation with the memory-building efforts led by
                Colombia&apos;s Truth Commission regarding the country&apos;s
                armed conflict.
              </p>
              <p>
                Using the leporello format which unfolds in an intimate and
                continuous flow the piece seeks to reflect the traces left by
                violence: scars that mark not only bodies, but also the
                collective memory of a nation.
              </p>
              <p>
                The back of the leporello (a vertical unfolding section) pays
                tribute to a collective memory action carried out by women and
                youth from Bogotá, Soacha, and Sumapaz: the creation of
                embroidered mantles as a way to tell their truths through art,
                resistance, and care. This section visually simulates a building
                covered by these mantles, echoing the symbolic act in which the
                textiles were used to wrap institutions tied to justice,
                reparation, and truth. Through this gesture, embroidery becomes
                a language of healing, visibility, and recognition of silenced
                stories.
              </p>
              <p>
                Las cicatrices is a poetic and visual echo of that woven memory
                a call to remember, to transform pain into story, and to weave
                new heartbeats for truth.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col gap-3">
        <div className="grid lg:grid-cols-2 gap-3 lg:gap-0 lg:h-[70vh] overflow-hidden">
          <Image
            src="/images/project-3/foto-1.jpg"
            alt="Las cicatrices"
            width={1000}
            height={1000}
            className="w-full lg:h-[70vh] lg:flex-1 object-cover"
          />
          <Image
            src="/images/project-3/foto-2.png"
            alt="Las cicatrices"
            width={1000}
            height={1000}
            className="w-full lg:flex-1 object-cover lg:h-[70vh]"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-3 lg:gap-0">
          <Image
            src="/images/project-3/foto-3.jpg"
            alt="Las cicatrices"
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
          <Image
            src="/images/project-3/foto-4.png"
            alt="Las cicatrices"
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row">
          <Image
            src="/images/project-3/foto-5.jpg"
            alt="Las cicatrices"
            width={1000}
            height={1000}
            className="w-full object-cover lg:w-2/5"
          />
          <Image
            src="/images/project-3/foto-6.jpg"
            alt="Las cicatrices"
            width={1000}
            height={1000}
            className="w-full object-cover lg:w-3/5"
          />
        </div>
        <Image
          src="/images/project-3/foto-7.jpg"
          alt="Las cicatrices"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
      </section>
    </main>
  );
}
