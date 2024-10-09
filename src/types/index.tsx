import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
}

export type TRecipe = {
  _id: string;
  title: string;
  description: string;
  category: string;
  ingredients: string[];
  images: string;
  user?: string;
  ratings?: number[];
  comments?: string[];
  upvotes?: string[];
  downvotes?: string[];
  premiumContent: boolean;
};

export interface IUser {
  _id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  follower: string;
  profilePicture: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
