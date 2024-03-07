"use client";

import Image from "next/image";
import menu from "@/public/menu.svg";
import Link from "next/link";
import close from "@/public/close.svg";
import { useRef } from "react";

export default function Menu() {
  function handleMenu() {
    const menu = document.querySelector(".mobile-menu");
    const visible = menu.getAttribute("data-visible");
    if (visible == "false") {
      menu.setAttribute("data-visible", true);
    } else {
      menu.setAttribute("data-visible", false);
    }
  }

  return (
    <>
      <div className="h-[80px] bg-[#161616] w-full border-b border-white/5 flex items-center px-10 sticky top-0 z-40 justify-between min-[768px]:hidden">
        <p className="text-xl font-bold">teja.media</p>
        <Image src={menu} alt="" onClick={handleMenu} />
      </div>
      <div
        data-visible="false"
        className="mobile-menu flex flex-col p-10 min-[769px]:hidden">
        <Image className="ml-auto" src={close} alt="" onClick={handleMenu} />
        <div className="flex flex-col mt-5">
          <Link className="text-white font-bold mb-2" href="#home">
            HOME
          </Link>
          <Link className="text-white font-bold mb-2" href="#portfolio">
            PORTFOLIO
          </Link>
          <Link className="text-white font-bold" href="#contact">
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
}
