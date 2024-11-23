import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-4 sm:p-6 lg:p-8">
      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-x-4 mb-6 sm:mb-8">
        <div className="relative inline-block">
          <div className="relative w-12 h-12">
            <Image
              width={48}
              height={48}
              src="/images/jotish.jpeg"
              alt="Jotish Sharma"
              className="rounded-full ring-1 dark:ring-white/10 ring-primary/5"
            />
            {/* Online status dot - fixed positioning */}
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white dark:ring-secondary"></span>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-base font-semibold text-primary dark:text-white">
            <a
              href="#"
              className="hover:text-primary/80 dark:hover:text-white/80 transition-colors"
            >
              Jotish Sharma
            </a>
          </h2>
          <div className="flex flex-wrap gap-2 items-center">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Senior Software Engineer
            </p>
            <span className="text-xs px-2 py-0.5 bg-primary/5 dark:bg-white/5 text-primary dark:text-white rounded-full">
              Available for Projects
            </span>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="space-y-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary dark:text-white">
          Crafting Digital Excellence Through Code
        </h1>

        <div className="space-y-4 text-zinc-500 dark:text-zinc-400">
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            With over 5 years of expertise in full-stack development, I
            specialize in building scalable web applications that drive business
            growth. My work has helped startups and enterprises alike achieve
            their digital transformation goals.
          </p>

          <div className="space-y-2">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              Core competencies:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "Node.js",
                "TypeScript",
                "AWS",
                "MongoDB",
                "Postgres",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs sm:text-sm border border-primary/10 dark:border-white/10 rounded-full 
                           text-primary dark:text-white/80 bg-primary/5 dark:bg-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            I focus on delivering clean, maintainable code and intuitive user
            experiences. My recent projects have achieved a 40% improvement in
            performance metrics and a 99.9% uptime record.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4">
            <div className="text-center p-3 sm:p-4 bg-primary/5 dark:bg-white/5 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-primary dark:text-white">
                50+
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                Projects Completed
              </div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-primary/5 dark:bg-white/5 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-primary dark:text-white">
                35+
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                Happy Clients
              </div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-primary/5 dark:bg-white/5 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-primary dark:text-white">
                5+
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
