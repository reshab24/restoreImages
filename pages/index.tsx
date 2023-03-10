import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Face Photo Restorer</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
        <a
          href="https://twitter.com/nutlope/status/1615597965787435015"
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          Used by over <span className="font-semibold">55,000</span> happy
          customers
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Restoring old photos{" "}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">using AI</span>
          </span>{" "}
          for everyone.
        </h1>

        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          Have old and blurry face photos? Let our AI restore them so those
          memories can live on. 100% free – restore your photos today.
        </p>
        <Link
          className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
          href="/restore"
        >
          Restore your photos &rarr;
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
