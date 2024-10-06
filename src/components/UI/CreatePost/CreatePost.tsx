import Image from "next/image";
import React from "react";
import realUser from "@/assets/realuser.jpg";
import { PiQuestionMarkFill } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
const CreatePost = () => {
  return (
    <div className="border rounded py-4 px-4 bg-[#fff]">
      <div>
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src={realUser}
            alt="user"
            width={40}
            height={40}
          ></Image>
          <div className="w-full">
            <h2 className="py-2 lg:px-4 md:px-4 px-2 rounded-full border w-full text-sm cursor-pointer text-[#707070]">
              What recipe you want to post or share?
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-between lg:px-12 md:px-12 sm:px-10 px-4 pt-2 lg:ml-4 cursor-pointer text-[#555454]">
          <p className="flex items-center justify-center gap-1">
            <span className="text-lg">
              <PiQuestionMarkFill />
            </span>{" "}
            <span className="text-sm">Ask</span>
          </p>
          <p className="flex items-center justify-center gap-1">
            <span className="text-lg">
              <FiEdit />
            </span>{" "}
            <span className="text-sm">Answer</span>
          </p>
          <p className="flex items-center justify-center gap-1">
            <span className="text-lg">
              <MdModeEditOutline />
            </span>{" "}
            <span className="text-sm">Post</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
