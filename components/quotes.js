import React from "react";

const Quotes = () => {
  return (
    <>
      <div className="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
        <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-3xl">
          As developers, we have the power to create something out of nothing.
          We start with a blank canvas and through our code, we bring ideas to
          life.
          <br />
          <br />
          It&apos;s a mix of art and science, where creativity meets logic. The
          joy of seeing your creation work seamlessly is what drives us to keep
          pushing boundaries and exploring new technologies.
        </p>
        <p className="text-primary dark:text-white mt-4">Michael Chen</p>
      </div>
    </>
  );
};

export default Quotes;
