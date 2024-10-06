"use client";
import Image from "next/image";
import React from "react";
import backUser from "@/assets/userback.jpg";
import realUser from "@/assets/realuser.jpg";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbTimelineEventExclamation } from "react-icons/tb";
import PrimuerModel from "../PrimuerModel/PrimuerModel";

const UserSideBar = () => {
  return (
    <div className="flex flex-col gap-3 sticky top-16">
      <div className="border rounded bg-[#fff]">
        <div>
          <Image
            className="rounded-t border"
            src={backUser}
            alt="cover"
            width={720}
            height={100}
          ></Image>
        </div>

        <div>
          <Image
            className="rounded-full border-4 border-[#B80101] z-20 mt-[-30px] ml-4"
            src={realUser}
            alt="user"
            width={70}
            height={70}
          ></Image>

          <div className="px-4 py-4">
            <h2 className="text-xl font-semibold text-[#4d4d4d]">Al Mamon</h2>
            <p className="text-sm text-[#4d4d4d] py-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              harum quis soluta at, inventore consectetur!
            </p>
          </div>
        </div>
      </div>
      <div className="py-3 px-4 rounded border bg-[#fff]">
        <p className="text-sm text-[#808080]">
          Access exclusive tools & insights
        </p>
        <div className="flex gap-1 cursor-pointer items-center text-sm">
          <span className="text-[#E7A33E]">
            <MdOutlineWorkspacePremium />
          </span>{" "}
          {/* <span className="hover:text-[#B92B27]">Try Premium</span> */}
          <span className="text-[red]">
            <PrimuerModel></PrimuerModel>
          </span>
        </div>
      </div>

      <div className="py-3 px-4 rounded border hidden lg:flex md:flex flex-col cursor-pointer gap-1 text-sm text-[#3d3d3d] bg-[#fff]">
        <div className="flex items-center hover:text-[#B92B27] justify-between">
          <p>Profile viewers</p>
          <p className="text-[#B92B27] font-medium">6</p>
        </div>
        <div className="flex items-center hover:text-[#B92B27] justify-between">
          <p>Post impressions</p>
          <p className="text-[#B92B27]">72</p>
        </div>
      </div>

      <div className="py-3 px-4 rounded border flex flex-col gap-2 cursor-pointer text-sm text-[#3d3d3d] bg-[#fff]">
        <p className="flex items-center gap-1 hover:text-[#B92B27]">
          <span>
            <IoBookmarkSharp />
          </span>{" "}
          <span>Saved recipes</span>
        </p>
        <p className="flex items-center gap-1 hover:text-[#B92B27]">
          <span>
            <HiOutlineUserGroup />
          </span>{" "}
          <span>Group</span>
        </p>
        <p className="flex items-center gap-1 hover:text-[#B92B27]">
          <span>
            <TbTimelineEventExclamation />
          </span>{" "}
          <span>Events</span>
        </p>
      </div>
    </div>
  );
};

export default UserSideBar;
