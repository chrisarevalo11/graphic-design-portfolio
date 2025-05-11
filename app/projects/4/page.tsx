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
            src="/images/project-4/cover.png"
            alt="Río Atrato"
            width={1000}
            height={1000}
            priority
            className="h-full object-cover absolute inset-0 z-0"
          />
          <p className="py-5 text-sm sm:text-base text-center px-[10%] z-10 text-white bg-gray-hero/60 font-mono">
            “Tus aguas tristes vestidas de luto viajaban atemorizadas cantando
            tu dolor.”
          </p>
        </section>
        <section className="mt-5 px-4 flex flex-col sm:flex-row md:flex-col gap-3 md:gap-8 md:flex-1">
          <div className="flex flex-col gap-3 md:gap-8 flex-1 md:flex-0">
            <h1 className="text-2xl font-medium">Río Atrato</h1>
            <p className="sm:hidden">
              Río Atrato is a braille booklet that gives voice to a river marked
              by violence. It invites touch as reading, raising awareness about
              the need for accessible storytelling in Colombia.
            </p>
            <div className="flex gap-3 flex-col ">
              <div>
                <h2 className="font-semibold uppercase">Project Type</h2>
                <p> Inclusive Design / Experimental Publishing</p>
              </div>
              <div>
                <h2 className="font-semibold uppercase">Technique</h2>
                <p>Braille printing / Tactile storytelling</p>
              </div>
              <div>
                <h2 className="font-semibold uppercase">Topics</h2>
                <p>
                  Accessibility / Memory and Violence / Disability Inclusion /
                  Sensory Communication
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-8 flex-1 md:flex-0">
            <p className="hidden sm:block">
              Río Atrato is a braille booklet that gives voice to a river marked
              by violence. It invites touch as reading, raising awareness about
              the need for accessible storytelling in Colombia.
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
                Río Trato is an editorial design project in which I created a
                small braille booklet based on an audio fragment that tells the
                story of a river that witnessed massacres but was powerless to
                intervene. The goal was to give the river a voice, allowing its
                story to be read through touch—transforming braille into its
                skin, and its silence into presence.
              </p>
              <p>
                This project stems from a deep concern about the lack of
                accessible materials for visually impaired communities in
                Colombia. Beyond the physical form, it is an exploration of how
                design can serve memory, inclusion, and empathy—offering a space
                for reflection on violence and the right to access stories in
                all forms.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col gap-3">
        <Image
          src="/images/project-4/foto-1.png"
          alt="Río Atrato"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
        <Image
          src="/images/project-4/foto-2.png"
          alt="Río Atrato"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
        <Image
          src="/images/project-4/foto-3.png"
          alt="Río Atrato"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
        <Image
          src="/images/project-4/foto-4.png"
          alt="Río Atrato"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
      </section>
    </main>
  );
}
