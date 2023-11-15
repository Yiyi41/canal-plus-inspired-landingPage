"use client";

import Head from "next/head";
import Video from "../components/videoBackground/Video";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Video />
      </main>
    </>
  );
}
