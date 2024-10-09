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
