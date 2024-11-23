import Head from "next/head";
import Grid from "@/components/grid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jotish Sharma - Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Jotish Sharma's portfolio showcasing skills in Next.js, React.js, Node.js, Tailwind CSS, and more."
        />
        <meta
          name="keywords"
          content="Jotish Sharma, jotishsharma, jotish, jotish sharma, jotish portfolio, jotish sharma portfolio, Full Stack Developer, Next.js, React.js, Node.js, Tailwind CSS, portfolio, web development, software engineer"
        />
        <meta name="author" content="Jotish Sharma" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="dark:bg-primary bg-zinc-200">
        <Grid />
      </main>
    </>
  );
}
