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
            src="/images/project-2/cover.png"
            alt="Wakamanta"
            width={1000}
            height={1000}
            priority
            className="h-full object-cover absolute inset-0 z-0"
          />
          <p className="py-5 text-sm flex flex-col w-full sm:text-base text-center px-[10%] z-10 text-white bg-gray-hero/60 font-mono">
            <span className="w-full font-semibold">Wakmanta</span>
            adv. De nuevo, nuevamente, otra vez.
          </p>
        </section>
        <section className="mt-5 px-4 flex flex-col sm:flex-row md:flex-col gap-3 md:gap-8 md:flex-1">
          <div className="flex flex-col gap-3 md:gap-8 flex-1 md:flex-0">
            <h1 className="text-2xl font-medium">Wakamanta</h1>
            <p className="sm:hidden">
              An oracle inspired by endangered animals and the ancestral wisdom
              of the Quechua language.
            </p>
            <div className="flex gap-3 flex-col ">
              <div>
                <h2 className="font-semibold uppercase">Project Type</h2>
                <p>Oracle</p>
              </div>
              <div>
                <h2 className="font-semibold uppercase">Technique</h2>
                <p>Pictogram system design</p>
              </div>
              <div>
                <h2 className="font-semibold uppercase">Topics</h2>
                <p>Ancestral wisdom, biodiversity</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-8 flex-1 md:flex-0">
            <p className="hidden sm:block">
              An oracle inspired by endangered animals and the ancestral wisdom
              of the Quechua language.
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
                Wakamanta is a fast oracle inspired by the ancestral wisdom of
                the Quechua language and seven animals native to Colombia that
                are currently endangered. Each animal is represented through a
                custom designed pictogram, and based on its behavioral traits,
                it is associated with a Quechua word that reflects its symbolic
                essence.
              </p>
              <p>
                The result is a two-deck oracle system. One deck features the
                pictograms along with their Quechua names. The second presents
                the same words, but accompanied by evocative terms that expand
                their meanings and allow for intuitive interpretation.
              </p>
              <p>
                The pictograms were created through a deep process of
                abstraction. Rather than aiming for realism, the designs embrace
                formal simplification distancing themselves from literal
                representations in order to unify the visual system and
                emphasize symbolic meaning.
              </p>
              <p>
                The color palette, gold and emerald, references the richness of
                Colombia&apos;s ancestral wisdom and natural heritage. These
                tones enhance the ritual dimension of the experience and connect
                the oracle with the land it honors.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col gap-3">
        <Image
          src="/images/project-2/foto-1.png"
          alt="Wakamanta"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-1">
          <Image
            src="/images/project-2/foto-2.jpg"
            alt="Wakamanta"
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
          <Image
            src="/images/project-2/foto-3.jpg"
            alt="Wakamanta"
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
