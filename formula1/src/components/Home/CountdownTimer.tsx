import { useState, useEffect } from "react";
import "../../css/HomePage.css";

const CountdownTimer = () => {
  const eventDate = new Date("2023-12-31T18:00:00");

  interface TimeLeft {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  }

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="countdown-timer d-flex justify-content-center">
      {timeLeft.days && (
        <div className="timer-item">
          <div className="timer-value">{timeLeft.days}</div>
          <div className="timer-label">Days</div>
        </div>
      )}
      <div className="timer-item">
        <div className="timer-value">{timeLeft.hours}</div>
        <div className="timer-label">Hours</div>
      </div>
      <div className="timer-item">
        <div className="timer-value">{timeLeft.minutes}</div>
        <div className="timer-label">Minutes</div>
      </div>
      <div className="timer-item">
        <div className="timer-value">{timeLeft.seconds}</div>
        <div className="timer-label">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
