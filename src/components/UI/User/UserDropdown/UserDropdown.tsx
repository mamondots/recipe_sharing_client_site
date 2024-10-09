import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import { Button } from "@nextui-org/button";
import { MdDashboardCustomize } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

import Image from "next/image";
import user from "@/assets/userImg.jpg";
import { logout } from "@/service/AuthService";

const UserDropdown = () => {
  // const logOut = logout()
  const handleLogout = () => {
    logout();
    // Redirect to the login page or homepage
    window.location.href = "/login";
  };
  return (
    <Dropdown className="rounded">
      <DropdownTrigger>
        <Button className="bg-transparent">
          <Image
            className="rounded-full border border-[#adadad]"
            src={user}
            width={30}
            height={30}
            alt="user"
          ></Image>
        </Button>
      </DropdownTrigger>
      <DropdownMenu className="rounded">
        <DropdownItem
          className="hover:bg-transparent hover:text-inherit"
          key="new"
        >
          <div className="flex items-center gap-1">
            <span>
              <MdDashboardCustomize />
            </span>
            <span>Your DashBoard</span>
          </div>
        </DropdownItem>
        <DropdownItem
          className="hover:bg-transparent hover:text-inherit"
          key="new"
        >
          <div className="flex items-center gap-1">
            <span>
              <IoMdSettings />
            </span>
            <span>Setting</span>
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
          <div onClick={handleLogout} className="flex items-center gap-1">
            <span>
              <IoLogOutOutline />
            </span>
            <span>logout</span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropdown;
