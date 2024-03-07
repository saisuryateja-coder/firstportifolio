"use client";

import Image from "next/image";
import image1 from "@/public/1.png";
import image2 from "@/public/2.png";
import image3 from "@/public/3.png";
import image4 from "@/public/4.png";
import image5 from "@/public/5.png";
import image6 from "@/public/6.png";
import image7 from "@/public/7.png";
import image8 from "@/public/8.png";
import image9 from "@/public/9.png";
import { useEffect, useMemo, useRef } from "react";

export default function Video() {
  const boxe1 = useRef(null);
  const boxe2 = useRef(null);
  const boxe3 = useRef(null);
  const boxe4 = useRef(null);
  const boxe5 = useRef(null);
  const boxe6 = useRef(null);
  const boxe7 = useRef(null);
  const boxe8 = useRef(null);
  const boxe9 = useRef(null);
  const wrapper = useRef(null);

  const allrefs = useMemo(
    () => [boxe3, boxe9, boxe2, boxe5, boxe1, boxe4, boxe7, boxe6, boxe8],
    []
  );

  const allimages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  const sequence = useMemo(() => [0, 5, 6, 1, 8, 4, 3, 7, 2], []);

  useEffect(() => {
    const wrapperElement = wrapper.current;
    const wrapperWidth = 1370;
    wrapperElement.style.transition = "transform 6.2s linear";
    wrapperElement.style.transform = `translate(-${wrapperWidth}px)`;
    sequence.map((num, index) => {
      setTimeout(() => {
        allrefs[num].current.classList.add("flip");
      }, 700 * index);
    });
  }, [allrefs, sequence]);

  return (
    <div className="flex flex-col  items-center relative">
      <div className="video-container grid grid-cols-3 gap-1 w-[400px] h-[400px] mb-20 mx-auto max-[480px]:w-[250px] max-[480px]:h-[250px] max-[768px]:mb-10">
        {allrefs.map((ref, index) => {
          return (
            <div key={index} ref={ref} className={`flex-1 relative box`}>
              <div className="back absolute w-full h-full"></div>
              <div className="front absolute w-full h-full">
                <Image
                  className={`h-full object-cover ${
                    index == 0 && "rounded-tl-[20px]"
                  } ${index == 2 && "rounded-tr-[20px]"} ${
                    index == 6 && "rounded-bl-[20px]"
                  } ${index == 8 && "rounded-br-[20px]"}`}
                  src={allimages[index]}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="wrapper-container ml-auto max-[1923px]:ml-2 self-end relative">
        <div ref={wrapper} className="flex flex-col wrapper py-10">
          <div className="flex">
            {sequence.map((num, index) => {
              return (
                <div key={index}>
                  <div className="bg-white w-[150px] rounded-[20px] h-[80px] mx-2 max-[480px]:h-[60px]">
                    <Image
                      className="w-full h-full object-cover rounded-[10px]"
                      src={allimages[num]}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-5">
            <div className="flex mx-2">
              <div className="rounded  mr-10">
                <div className="h-10 w-[600px] bg-[#9A89FF] rounded flex items-center pl-3">
                  Sound Track 1
                </div>
              </div>
              <div className=" rounded mr-10">
                <div className="h-10 w-[310px]"></div>
              </div>
              <div className="rounded  mr-10">
                <div className="h-10 w-[370px] bg-[#9A89FF] rounded flex items-center pl-3">
                  Sound Track 3
                </div>
              </div>
              <div className=" rounded mr-10">
                <div className="h-10 w-[370px]"></div>
              </div>
            </div>
            <div className="flex mt-5">
              <div className="rounded mr-10">
                <div className="h-10 w-[580px]"></div>
              </div>
              <div className="rounded mr-10">
                <div className="h-10 w-[370px] bg-[#4EC353] rounded flex items-center pl-3">
                  Sound Track 2
                </div>
              </div>
              <div className="rounded mr-10">
                <div className="h-10 w-[200px]"></div>
              </div>
              <div className="rounded mr-10">
                <div className="h-10 w-[210px] bg-[#4EC353] rounded flex items-center pl-3">
                  Sound Track 4
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[10px] left-20">
          <div className="w-[20px] h-[20px] rounded-full bg-[#A89A9A] ml-[-7px] mb-[-1px]"></div>
          <div className="w-[6px] h-[250px] bg-[#A89A9A]"></div>
        </div>
      </div>
    </div>
  );
}
