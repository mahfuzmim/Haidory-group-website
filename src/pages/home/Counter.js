import React, { useState, useEffect, useRef } from "react";

function Counter({ targetNumber }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const callback = (entries) => {
    const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && count < targetNumber) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          return prevCount + 1;
        });
      }, 200);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isVisible, count, targetNumber]);

  return (
    <div className="counter" ref={counterRef}>
      <div className="count">{count}+</div>
    </div>
  );
}

export default Counter;
