"use client";

import GLOBE from "vanta/src/vanta.globe";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x6b21a8,
          backgroundColor: 0x020617,
        })
      );
    }
  }, [vantaEffect]);
  return (
    <div
      className="bg-[#0x23153c] min-h-screen w-full flex flex-col justify-center items-start text-gray-200"
      ref={vantaRef}
    >
      <div className="m-8 p-4 space-y-12">
        <h1 className="font-bold text-7xl ">Social Syncer</h1>
        <h2 className="text-xl w-3/6">
          Social syncer is a social media platform where user can store their
          profile in a innovative and transformative way which does fetching
          very fast and gives a good user experience.
        </h2>

        <div className="w-1/4 text-center border-purple-800 border-2 rounded-lg font-medium text-white px-4 py-2 mt-4 text-sm md:text-lg lg:text-xl transition-all duration-300 ease-in-out hover:bg-purple-800 focus:outline-none focus:ring focus:border-purple-900">
          <Link href="/main">
            <p>Explore</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
