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
            src="/images/project-1/cover.png"
            alt="Escrito por una dama"
            width={1000}
            height={1000}
            priority
            className="h-full object-cover absolute inset-0 z-0"
          />
          <p className="py-5 text-sm sm:text-base text-center px-[10%] z-10 text-white bg-gray-hero/60 font-mono">
            “Lock up your libraries if you like; but there is no gate, no lock,
            no bolt that you can set upon the freedom of my mind.”{" "}
            <span className="font-bold">Virginia Woolf</span>
          </p>
        </section>
        <section className="mt-5 px-4 flex flex-col sm:flex-row md:flex-col gap-3 md:gap-8 md:flex-1">
          <div className="flex flex-col gap-3 md:gap-8 flex-1 md:flex-0">
            <h1 className="text-2xl font-medium">Escrito por una dama</h1>
            <p className="sm:hidden">
              A visual journey through the struggle of five women writers who
              challenged and continue to challenge the limits imposed by the
              society of their time.
            </p>
            <div className="flex gap-3 flex-col ">
              <div>
                <h2 className="font-semibold uppercase">Project Type</h2>
                <p>Infographic</p>
              </div>
              <div>
                <h2 className="font-semibold uppercase">Technique</h2>
                <p>Information Design</p>
              </div>
              <div>
                <h2 className="font-semibold uppercase">Topics</h2>
                <p>Literature, feminism, historical memory</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-8 flex-1 md:flex-0">
            <p className="hidden sm:block">
              A visual journey through the struggle of five women writers who
              challenged and continue to challenge the limits imposed by the
              society of their time.
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
                &quot;Written by a Lady&quot; is an infographic that features
                five women writers from different eras and cultural backgrounds:
                Sor Juana Inés de la Cruz, Amantine Lucile Aurore Dupin (George
                Sand), Soledad Acosta de Samper, Virginia Woolf, and María
                Ospina Pizano. It explores the challenges they faced as women in
                literature and the strategies they used to rise and be heard.
              </p>
              <p>
                Through a chronological narrative, the piece presents both the
                obstacles and actions that shaped each author&apos;s journey,
                while offering contextual data—such as dress codes or gender
                expectations that help the viewer understand the social norms of
                each period. This visual storytelling piece not only highlights
                their resistance and achievements but invites reflection on the
                historical and ongoing struggles of women in literature.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col gap-3">
        <Image
          src="/images/project-1/foto-1.png"
          alt="Escrito por una dama"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-1">
          <Image
            src="/images/project-1/foto-2.jpg"
            alt="Escrito por una dama"
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
          <Image
            src="/images/project-1/foto-3.jpg"
            alt="Escrito por una dama"
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
