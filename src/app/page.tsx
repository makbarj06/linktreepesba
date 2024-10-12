"use client";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import img from "@/app/img/matahari.png";
import logo from "@/app/img/teamhindia.png";
import Countdown from "@/components/countdown";

export default function Home() {
  const [isSunset, setIsSunset] = useState(false);
  const [isMatahariVisible, setIsMatahariVisible] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const targetDate = new Date("2024-10-20T00:00:00Z").getTime();

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100 + "vw",
    y: Math.random() * 100 + "vh",
    scale: Math.random() * 0.5 + 0.3, // Mengubah skala bintang
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMatahariVisible(false);
    }, 3000);

    const backgroundTimer = setTimeout(() => {
      setIsSunset(true);
    }, 4000);

    const textTimer = setTimeout(() => {
      setIsTextVisible(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(backgroundTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div
      className={`w-screen h-screen flex justify-center relative overflow-hidden transition-all duration-1000 ${
        isSunset ? "bg-[#001f3f]" : "bg-white"
      }`}
    >
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{
          y: isMatahariVisible ? 0 : 300,
          opacity: isMatahariVisible ? 1 : 0,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -bottom-40 w-full flex justify-center"
      >
        <Image
          src={img}
          alt="Matahari Terbit"
          className="w-[300px] h-auto md:w-[500px] lg:w-[700px]"
        />
      </motion.div>

      {isTextVisible && (
        <div className="flex flex-col items-center">
          <div className=" flex justify-center w-full bg-yellow-500 "></div>
          <Image
            src={logo}
            alt="llogoth"
            className="w-[100px] h-auto md:w-[100px] lg:w-[100px] -mb-5"
          />
          <h1 className="text-lg md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Team Hindia Makassar Present
            <br />
          </h1>
          <Cover className="text-white font-ayuga text-5xl flex flex-col items-center justify-center">
            <div className="Matahari">MATAHARI</div>
            <div className="">TENGGELAM</div>
          </Cover>
          <div className=" text-white flex flex-col items-center ">
            <h1 className="text-2xl pt-10">Panggilan Berkumpul !!</h1>
            <div className=" ">
              <Countdown targetDate={targetDate} />
            </div>
          </div>
        </div>
      )}

      {/* Partikel Bintang */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute star"
          animate={{
            opacity: [0.2, 0.5, 0.2], // Mengurangi efek kedap-kedip
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            left: particle.x,
            top: particle.y,
            width: `${particle.scale * 10}px`, // Ukuran bintang diperkecil
            height: `${particle.scale * 10}px`,
            backgroundColor: "#ffffff", // Bintang berwarna putih
            borderRadius: "50%", // Bentuk bintang bulat
          }}
        />
      ))}

      <style jsx>{`
        .star {
          position: absolute;
          z-index: 10; /* Pastikan elemen ini terlihat di atas */
        }
      `}</style>
    </div>
  );
}
