"use client";
import { useState, useEffect } from "react";

export default function Nikhil() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col m-5 text-alabaster-400 relative ">
      <div className="m-auto rounded-md p-3 font-semibold">
        <h1
          className={`text-9xl transition-all duration-1000 text-shadow-glow ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Nikhil Dunna
        </h1>
        <div
          className={`pt-2 text-3xl space-y-2 transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <p className="hover:text-fern_green-400 transition-colors duration-300">
            aspiring full stack developer
          </p>
          <p className="group hover:text-fern_green-400 transition-colors duration-300">
            3rd year undergrad in computer science at the{" "}
            <span className="group-hover:text-inherit transition-colors duration-300">
              university of georgia
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
