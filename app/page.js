import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-200">
      <section className="grid md:grid-cols-2 h-screen grid-rows-2">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortner in the Market
          </p>
          <p className="px-20 text-center">
            We are the most straightforward URL Shortner in the world. Most of
            the url shortners will track you or ask you to give your details for
            login. We understand your needs and hence we have created this URL
            shortner
          </p>
          <div className="flex gap-3 justify-start">
            <Link href="/shorten">
              <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white">
                Try Now
              </button>
            </Link>
            <a href="https://github.com/iMaverick007/url-shortner" target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white">
                Github
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-start relative ">
          <Image
            className="mix-blend-darken"
            alt="an Image of a vector"
            src={"/vector.jpg"}
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}