"use client";
import FXModel from "@/components/Models/FXModel";
import Image from "next/image";
import React from "react";
import realUser from "@/assets/realuser.jpg";
import "./index.css";
import { SiAdblock } from "react-icons/si";
import { BsFillFileEarmarkLockFill } from "react-icons/bs";
import { MdFreeBreakfast } from "react-icons/md";

const PrimuerModel = () => {
  return (
    <div className="">
      <FXModel buttonText="">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-xl font-semibold py-2 text-[#B92B27]">
            Recipe Sharing
          </h2>
          <div className="addBorder text-center flex flex-col justify-center items-center">
            <Image
              className="rounded-full z-30 relative"
              src={realUser}
              alt="user"
              width={70}
              height={70}
            ></Image>
            <h2 className="text-lg font-semibold text-[#B92B27] py-1">
              Join Premium
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-3">
          <div className="border px-4 py-2 border-[#ff000071] rounded text-center justify-center flex items-center flex-col">
            <p className="text-xl text-[#B92B27] py-1">
              <SiAdblock />
            </p>
            <h2>Browse Recipe ad‑free</h2>
          </div>
          <div className="border px-4 py-2 border-[#ff000071] rounded text-center justify-center flex items-center flex-col">
            <p className="text-xl text-[#B92B27] py-1">
              <BsFillFileEarmarkLockFill />
            </p>

            <h2>Unlock millions of recipe</h2>
          </div>
          <div className="border px-4 py-2 border-[#ff000071] rounded text-center justify-center flex items-center flex-col">
            <p className="text-xl text-[#B92B27] py-1">
              {" "}
              <MdFreeBreakfast />
            </p>

            <h2>Try it free for 30 days</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-3 cursor-pointer">
          <div className="border disabled border-[#9b9a9a] rounded px-4 py-4">
            <div className="flex items-center gap-1">
              <p className="p-2 border rounded-full border-[#777676]"></p>
              <p>Yearly</p>
              <p className="bg-[#2E69FF] text-sm text-[#fff] rounded-xl px-1">
                save 30%
              </p>
            </div>
            <p className="text-[#807f7f] text-sm">$3.6/mo</p>
          </div>
          <div className="border border-[#2E69FF] bg-[#EBF0FF] rounded px-4 py-4">
            <div className="flex items-center gap-1">
              <p className="p-2 border rounded-full border-[#2E69FF]"></p>
              <p>Monthly</p>
            </div>
            <p className="text-[#2E69FF] text-sm">$6.99/mo</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <p className="text-base font-semibold text-[#777777]">
              Starting November 6, 2024
            </p>
            <p className="text-[#2E69FF]">$6.99/mo</p>
          </div>
          <div>
            <p className="text-sm  text-[#777777] py-2">
              Your subscription will renew automatically each year. Cancel at
              any time in settings.
            </p>
            <p className="text-[#777777]">
              By signing up for a subscription, you agree to recipe{" "}
              <span className="text-[#2E69FF] cursor-pointer hover:text-[#B92B27] duration-250">
                Subscriber Terms of Service.s
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center bg-[#2E69FF] w-full rounded-full py-2 my-4 text-[#fff]">
            <button> Subscriber</button>
          </div>
        </div>
      </FXModel>
    </div>
  );
};

export default PrimuerModel;
