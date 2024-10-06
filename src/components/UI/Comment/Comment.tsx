import Image from "next/image";
import React from "react";
import realUser from "@/assets/realuser.jpg";
const Comment = () => {
  return (
    <div className="py-2 px-4 mt-2 flex items-center justify-between gap-2 w-full">
      <div className="flex items-center gap-2 w-full">
        <Image
          className="rounded-full"
          src={realUser}
          alt="user"
          width={30}
          height={30}
        ></Image>
        <div className="w-full">
          <form className="w-full">
            <input
              className="w-full text-sm px-4 py-1 rounded-xl border outline-none"
              type="text"
              placeholder="Add Comment"
            />
          </form>
        </div>
      </div>

      <div>
        <button className="text-sm bg-[#2E69FF] hover:bg-[#2d52b1] cursor-pointer duration-300 text-[#fff] px-4 py-1 rounded-xl">
          comment
        </button>
      </div>
    </div>
  );
};

export default Comment;
