import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="ring-1 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between bg-white dark:bg-secondary">
        <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl">
          Testimonials
        </p>
        <div className="md:grid md:grid-cols-2 gap-6 lg:grid-cols-1">
          <div className="mt-4">
            <p className="text-sm text-pink-500 dark:text-pink-400">
              &quot;Highly recommended full-stack developer providing top-notch
              services, especially skilled in Next.js development&quot;
            </p>
            <p className="text-xs mt-2 text-zinc-500">
              <span className="block text-xs">Sweta</span>
              <span className="block text-xs"> Doctor</span>
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-orange-500 dark:text-orange-300">
              &quot;Shows how good they are at building websites, using lots of
              different skills and tools.&quot;
            </p>
            <p className="text-xs mt-2 text-zinc-500">
              <span className="block text-xs">Ritesh</span>
              <span className="block text-xs">UI/UX Designer</span>
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-green-500 dark:text-green-300">
              &quot;His expertise in website development spans across different
              areas, from designing layouts to coding functionalities, ensuring
              a comprehensive and polished end result.&quot;
            </p>
            <p className="text-xs mt-2 text-zinc-500">
              <span className="block text-xs">Mark</span>
              <span className="block text-xs">Developer</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
