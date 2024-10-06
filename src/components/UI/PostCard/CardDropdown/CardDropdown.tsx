import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { HiDotsHorizontal } from "react-icons/hi";
import { Button } from "@nextui-org/button";
import { HiLink } from "react-icons/hi";
import { MdOutlineSpeakerNotesOff } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { TbArrowBigDownLine } from "react-icons/tb";
import { MdReportOff } from "react-icons/md";

const CardDropdown = () => {
  return (
    <Dropdown className="rounded">
      <DropdownTrigger>
        <Button className="bg-transparent text-2xl text-[#696969]">
          <HiDotsHorizontal />
        </Button>
      </DropdownTrigger>
      <DropdownMenu className="rounded">
        <DropdownItem
          className="hover:bg-transparent hover:text-inherit"
          key="new"
        >
          <div className="flex items-center gap-1">
            <span>
              <HiLink />
            </span>
            <span>Copy Link</span>
          </div>
        </DropdownItem>
        <DropdownItem
          className="hover:bg-transparent hover:text-inherit"
          key="new"
        >
          <div className="flex items-center gap-1">
            <span>
              <MdOutlineSpeakerNotesOff />
            </span>
            <span>Not interested in this</span>
          </div>
        </DropdownItem>
        <DropdownItem
          className="hover:bg-transparent hover:text-inherit"
          key="new"
        >
          <div className="flex items-center gap-1">
            <span>
              <FaRegBookmark />
            </span>
            <span>Bookmark</span>
          </div>
        </DropdownItem>

        <DropdownItem
          className="hover:bg-transparent hover:text-inherit"
          key="new"
        >
          <div className="flex items-center gap-1">
            <span>
              <TbArrowBigDownLine />
            </span>
            <span>Downvote question</span>
          </div>
        </DropdownItem>

        <DropdownItem
          className="hover:bg-transparent hover:text-inherit"
          key="new"
        >
          <div className="flex items-center gap-1">
            <span>
              <MdReportOff />
            </span>
            <span>Report</span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CardDropdown;
