/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import realUser from "@/assets/realuser.jpg";
import recipe from "@/assets/recipe.jpg";

import { TbArrowBigUpLine } from "react-icons/tb";
import { TbArrowBigDownLine } from "react-icons/tb";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { Tooltip } from "@nextui-org/tooltip";
import Comment from "../Comment/Comment";
import { useState } from "react";
import CardDropdown from "./CardDropdown/CardDropdown";
import Link from "next/link";
import { TRecipe } from "@/types";

const PostCard = ({ recipeData }: { recipeData: TRecipe }) => {
  const [comment, setComment] = useState(false);
  const handleComment = () => {
    setComment((prevComment) => !prevComment);
  };

  console.log(recipeData);
  return (
    <div className="border rounded py-2 bg-[#fff]">
      <div className="px-4">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src={realUser}
            alt="user"
            width={40}
            height={40}
          ></Image>
          <div>
            <div className="flex items-center gap-4 text-sm font-semibold">
              <h2>Al Mamon</h2>
              <p className="text-[#356EFF] font-normal cursor-pointer">
                Follow
              </p>
            </div>
            <p className="text-sm text-[#575656]">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div>
          <div className="py-2 mt-2">
            <Link href={`/recipes/${recipeData._id}`}>
              <h2 className="font-semibold">{recipeData.title}</h2>
            </Link>
            <Link href={`/recipes/${recipeData._id}`}>
              <p className="py-1 text-[#5e5d5d]">
                {recipeData.description}....
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Link href={`/recipes/${recipeData._id}`}>
          <Image
            className="cursor-pointer"
            src={recipeData.images}
            alt="recipe"
            width={700}
            height={700}
          ></Image>
        </Link>

        <div className="flex items-center justify-between lg:px-4 md:px-4 px-2 mt-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border px-2 rounded-full text-sm cursor-pointer font-semibold text-[#696969]">
              <p className="flex items-center gap-1 hover:text-[#2E69FF] duration-300">
                <span className="text-xl text-[#2E69FF]">
                  <TbArrowBigUpLine />
                </span>{" "}
                <span>Upvote</span>
              </p>
              <p className="flex items-center gap-1 border-l py-2 mx-2 hover:text-[#B92B27] duration-300">
                <span className="text-xl text-[#B92B27]">
                  <TbArrowBigDownLine />
                </span>{" "}
                <span>Downvote</span>
              </p>
            </div>

            <div
              onClick={handleComment}
              className="text-md text-[#696969] cursor-pointer"
            >
              <Tooltip
                className="bg-[#262626] text-[#fff] rounded py-1"
                content="Comment"
              >
                <p>
                  <FaRegComment />
                </p>
              </Tooltip>
            </div>
            <div className="text-md text-[#696969] cursor-pointer">
              <Tooltip
                className="bg-[#262626] text-[#fff] rounded py-1 "
                content="Share"
              >
                <p>
                  <FaRegShareFromSquare />
                </p>
              </Tooltip>
            </div>
          </div>
          <div className="text-2xl text-[#696969] cursor-pointer">
            <CardDropdown></CardDropdown>
          </div>
        </div>
      </div>
      {comment && <Comment></Comment>}
    </div>
  );
};

export default PostCard;
