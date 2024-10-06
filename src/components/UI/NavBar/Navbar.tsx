import Link from "next/link";
import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineGridView } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { FaBell } from "react-icons/fa";
import Image from "next/image";
import user from "@/assets/userImg.jpg";
import { BsGlobe2 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="lg:px-28 md:px-20 sm:px-16 px-4 py-2 z-[999] bg-[#fff] border-b border-[#bebebe13] shadow fixed top-0 w-full">
      <div className="flex items-center lg:gap-0 gap-4 justify-between">
        <div>
          <h2 className="lg:text-xl md:text-xl sm:text-xl text-md font-bold text-[#B92B27]">
            Mamon_<span>dots</span>
          </h2>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center justify-center gap-6 text-[#636466] text-[22px]">
            <Link className="hover:text-[#B92B27] duration-300" href={""}>
              <IoHomeSharp />
            </Link>
            <Link href={""}>
              <MdOutlineGridView />
            </Link>
            <Link href={""}>
              <BiSolidEdit />
            </Link>
            <Link href={""}>
              <HiUserGroup />
            </Link>
            <Link href={""}>
              <FaBell />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2">
            <form className="flex items-center space-x-1 border px-2 py-1 lg:w-[60vh]">
              <p className="text-[#636466] text-lg">
                <IoIosSearch />
              </p>
              <input
                className="outline-none"
                type="text"
                placeholder="Search recipe"
              />
            </form>
          </div>

          <div className="flex items-center justify-center gap-4">
            <h2
              className="text-[12px] font-medium px-4 py-2 
            border rounded-full text-[#636466] 
            tracking-wider hover:bg-[#B92B27] hover:text-[#fff]  cursor-pointer duration-300
            "
            >
              Try Premium
            </h2>
            <div>
              <Image
                className="rounded-full border border-[#adadad]"
                src={user}
                width={30}
                height={30}
                alt="user"
              ></Image>
            </div>
            <div className="text-2xl text-[#636466]">
              <BsGlobe2 />
            </div>
            <div>
              <button
                className="text-[12px] font-semibold px-4 py-2 
             rounded-full  
            tracking-wider bg-[#B92B27] hover:bg-[#9c2c29] text-[#fff]  cursor-pointer duration-300
            "
              >
                Add Recipe
              </button>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex">
          <div className="flex items-center justify-center lg:gap-8 md:gap-8 sm:gap-8 gap-4 text-[#636466] lg:text-xl md:text-xl sm:text-xl text-lg]">
            <Link href={""}>
              <IoHomeSharp />
            </Link>
            <Link href={""}>
              <MdOutlineGridView />
            </Link>
            <Link href={""}>
              <BiSolidEdit />
            </Link>
            <Link href={""}>
              <HiUserGroup />
            </Link>
            <Link href={""}>
              <FaBell />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
