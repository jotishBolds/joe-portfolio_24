import Head from "next/head";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Jotish Sharma - Full Stack Developer Portfolio",
  description:
    "Jotish Sharma's portfolio showcasing skills in Next.js, React.js, Node.js, Tailwind CSS, and more.",
  keywords:
    "Jotish Sharma, jotish, jotish portfolio, jotish sharma portfolio, jotishsharma, jotish, Full Stack Developer, Next.js, React.js, Node.js, Tailwind CSS, portfolio, web development, software engineer",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Jotish Sharma" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    </>
  );
}
