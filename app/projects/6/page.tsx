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
            src="/images/project-6/cover.png"
            alt="Angélica"
            width={1000}
            height={1000}
            priority
            className="h-full object-cover absolute inset-0 z-0"
          />
          <p className="py-5 text-sm sm:text-base text-center px-[10%] z-10 text-white bg-gray-hero/60 font-mono">
            &quot;There is a sweetness in knowing that one will never love any
            less, that one will never be consoled, that one will remember more
            and more.&quot; <span className="font-bold">Roland Barthes</span>
          </p>
        </section>
        <section className="mt-5 px-4 flex flex-col sm:flex-row md:flex-col gap-3 md:gap-8 md:flex-1">
          <div className="flex flex-col gap-3 md:gap-8 flex-1 md:flex-0">
            <h1 className="text-2xl font-medium">Angélica</h1>
            <p className="sm:hidden">
              A series of stippling illustrations that explores grief,
              transformation, and eternal love. Inspired by my mother&apos;s
              memory, this work symbolizes the act of letting her go, letting
              her fly.
            </p>
            <div className="flex gap-3 flex-col ">
              <div>
                <h2 className="font-semibold uppercase">Project Type</h2>
                <p>Personal Illustration</p>
              </div>
              <div>
                <h2 className="font-semibold uppercase">Technique</h2>
                <p>Technical Pen - Stippling</p>
              </div>
              <div>
                <h2 className="font-semibold uppercase">Topics</h2>
                <p>Grief, memory, transformation, nature, tribute</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-8 flex-1 md:flex-0">
            <p className="hidden sm:block">
              A series of stippling illustrations that explores grief,
              transformation, and eternal love. Inspired by my mother&apos;s
              memory, this work symbolizes the act of letting her go, letting
              her fly.
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
                Angélica is a stippling illustration project created with
                technical pen, born from the personal experience of mourning my
                mother&apos;s passing. Through two original compositions a
                cocoon and a butterfly in a field of tulips, her favorite
                flower,I represent the journey of transformation, farewell, and
                release.
              </p>
              <p>
                Every dot became a meditative act a way to process love,
                absence, and a bond that transcends the physical world. The
                cocoon symbolizes a moment of stillness, a container for pain
                and reflection. The butterfly, in contrast, represents freedom,
                acceptance, and the beauty of memory.
              </p>
              <p>
                Angélica is both a personal tribute and an invitation to reflect
                on how we experience loss, and how art can serve as a bridge
                between what was and what remains.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col gap-3">
        <Image
          src="/images/project-6/foto-1.png"
          alt="Angélica"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
        <Image
          src="/images/project-6/foto-2.png"
          alt="Angélica"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
        <Image
          src="/images/project-6/foto-3.png"
          alt="Angélica"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
        <div className="grid gap-3 sm:grid-cols-2">
        <Image
          src="/images/project-6/foto-4.jpg"
          alt="Angélica"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
        <Image
          src="/images/project-6/foto-5.jpg"
          alt="Angélica"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
        </div>
        <Image
          src="/images/project-6/foto-6.png"
          alt="Angélica"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
      </section>
    </main>
  );
}
