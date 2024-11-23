import Image from "next/image";
import React from "react";

const MySite = () => {
  return (
    <>
      <a
        target="_blank"
        href="https://hashcoder.com/"
        className="ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick"
      >
        <div>
          <p className=" ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
            Hashcoder
          </p>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Design & development subscriptions for startups.
            <br />
            <br />
            HashCoder is a technology solutions company headquartered in
            Gangtok, Sikkim. Founded by a driven group of tech-savvy local
            youths, the company&apos;s mission is to facilitate the adoption of
            emerging technologies for individuals and businesses within the
            state. With a deep understanding of Sikkim&apos;s unique challenges,
            HashCoder bridges the gap between cutting-edge technological
            advancements and the specific needs of the local community.
          </p>
        </div>
        <div className="mt-8">
          <Image
            width={1000}
            height={1000}
            src="/images/hashcoder.png"
            className="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 aspect-[4/4] bg-primary/5 dark:bg-primary ring-1 ring-white/10  object-cover"
            alt="hashcoder"
          />
        </div>
      </a>
    </>
  );
};

export default MySite;
