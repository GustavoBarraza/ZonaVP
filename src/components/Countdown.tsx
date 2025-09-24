import { useState, useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState("");

  const eventDate = new Date("2025-09-24T19:00:00"); 

  useEffect(() => {

    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime(); 

      if (diff <= 0) {
        setTimeLeft("¡El evento ya comenzó! 🙌");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`Faltan ${days} días, ${hours} horas y ${minutes} minutos`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center text-2xl font-bold text-blue-600 p-4">
      {timeLeft}
    </div>
  );
}

export default Countdown;
