"use client";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import img from "@/app/img/matahari.png";
import logo from "@/app/img/teamhindia.png";
import Countdown from "@/components/countdown";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

export default function Home() {
  const word: string[] = ["bernyanyi", "berkaraoke", "berdansa"];
  const [isSunset, setIsSunset] = useState(false);
  const [isMatahariVisible, setIsMatahariVisible] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isTextAnimating, setIsTextAnimating] = useState(false); // State baru untuk animasi teks
  const targetDate = new Date("2024-10-20T00:00:00Z").getTime();

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100 + "vw",
    y: Math.random() * 100 + "vh",
    scale: Math.random() * 0.5 + 0.3,
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMatahariVisible(false);
      setIsTextAnimating(true); // Set animasi teks aktif setelah matahari menghilang
    }, 3000);

    const backgroundTimer = setTimeout(() => {
      setIsSunset(true);
    }, 4000);

    const textTimer = setTimeout(() => {
      setIsTextVisible(true);
    }, 6000); // Memperpanjang waktu sebelum teks muncul

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
        <motion.div
          initial={{ opacity: 0 }} // Menambahkan efek awal
          animate={{
            opacity: isTextAnimating ? 1 : 0, // Munculkan teks dengan animasi
            transition: { duration: 1 }, // Durasi animasi
          }}
          className="flex flex-col items-center"
        >
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
            <div className="text-xl mx-auto font-normal mt-24 mb-2">
              Datang dan
              <FlipWords words={word} /> <br />
            </div>
            <Link
              href={"https://wa.me/+6288245302593"}
              className=" mt-5 mb-10 flex items-center border border-green-500 hover:bg-green-500 text-green-500 hover:text-white font-semibold py-3 px-8 rounded shadow-md transition duration-300"
            >
              {/* Ikon Telepon WhatsApp */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.254.725 4.369 1.952 6.086L0 24l5.824-1.949C7.731 23.275 9.708 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.115 17.11l-.003.002c-.264.363-.839.747-1.752.747-.745 0-1.453-.304-1.93-.822-.357-.387-1.327-1.396-1.517-1.673-.158-.245-.179-.582-.057-.81.125-.228.408-.337.663-.155.12.094.826.592 1.161.826.202.182.495.334.793.334.215 0 .451-.042.653-.215.255-.235.251-.558.002-.774l-1.09-1.09c-.317-.317-.798-.343-1.111-.058l-.013.013c-.174.174-.212.383-.097.582.138.218.379.392.611.392.151 0 .314-.054.434-.174.286-.283.243-.678.047-.973l-1.645-1.645c-.314-.314-.783-.328-1.098-.014l-.003.002c-.134.135-.146.337-.015.485.387.423 1.4 1.429 1.916 1.934.384.363.879.66 1.471.66.929 0 1.813-.471 2.305-1.25.463-.746.544-1.513.234-2.206-.236-.59-.707-1.057-1.373-1.175-.08-.016-.095-.016-.188-.01-.03.003-.062.008-.091.013-.354.075-.668.24-.956.49-.231.213-.496.5-.498.5-.014 0-.271-.225-.668-.46-.496-.267-.871-.557-1.249-.87-.351-.293-.513-.703-.487-1.096.022-.342.116-.629.25-.89.112-.195.173-.265.286-.247.14.024.379.16.57.32l.004-.004c.166.155.328.338.39.39 0 0 .03.028.097.064.161.088.442.156.653.17.262.017.45-.003.64-.103.405-.229.75-.736.958-1.075.091-.156.15-.244.152-.244.016-.039.04-.057.079-.057.005 0 .01 0 .016.002.33.016.597.21.63.554.004.037.016.195.047.292.166.532.437 1.308 1.085 1.828.364.303.726.388 1.045.388 1.271 0 2.512-1.516 2.877-2.536.166-.469.232-1.044.08-1.515-.132-.486-.557-.919-1.076-1.104-.149-.061-.338-.105-.563-.122z" />
              </svg>
              <span>Pesan tiket Sekarang</span>
            </Link>
            <div className=" ">
              <Countdown targetDate={targetDate} />
            </div>
          </div>
        </motion.div>
      )}

      {/* Partikel Bintang */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute star"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            left: particle.x,
            top: particle.y,
            width: `${particle.scale * 10}px`,
            height: `${particle.scale * 10}px`,
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      ))}

      {/* Footer Section */}

      {isTextVisible && (
        <footer className="absolute bottom-0 w-full bg-gray-800 text-white text-center py-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Team Hindia Makassar. All rights
            reserved.
          </p>
          <p className="text-xs">
            Follow us on
            <a
              href="https://www.instagram.com/teamhindia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:underline"
            >
              {" "}
              Instagram
            </a>{" "}
          </p>
        </footer>
      )}
    </div>
  );
}
