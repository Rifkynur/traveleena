import React from "react";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div className={`fixed inset-0 transform ${navOpen} transition-all duration-50 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
      <div className={`text-white ${navOpen} fixed flex flex-col justify-center h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-800 space-y-6 z-[1006]`}>
        {navLinks.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              <p className="w-fit ml-12 border-b-[1.5px] border-white text-[20px] sm:text-[30px] pb-1">{link.label}</p>
            </Link>
          );
        })}
        <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] textt-white sm:size-8 size-6" />
      </div>
    </div>
  );
};

export default MobileNav;
