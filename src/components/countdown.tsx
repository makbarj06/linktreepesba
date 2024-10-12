// components/Countdown.tsx
import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: number; // Waktu target dalam milidetik
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(countdownInterval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [targetDate]);

  return (
    <div className="flex  justify-center items-center mt-8">
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
        <span className="text-2xl font-bold">{timeRemaining.days}</span>
        <span className="text-sm">Hari</span>
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
        <span className="text-2xl font-bold">{timeRemaining.hours}</span>
        <span className="text-sm">Jam</span>
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
        <span className="text-2xl font-bold">{timeRemaining.minutes}</span>
        <span className="text-sm">Menit</span>
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
        <span className="text-2xl font-bold">{timeRemaining.seconds}</span>
        <span className="text-sm">Detik</span>
      </div>
    </div>
  );
};

export default Countdown;
