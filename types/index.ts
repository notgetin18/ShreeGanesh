import { MouseEventHandler } from "react";

export interface customButtonProps {
  title: string;
  containerStyles?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface Product {
  id: number;
  title: string;
  imageSrc: string;
  price: number;
}

export interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: number;
  id: string;
}

export interface ProductDetailProps {
  product: {
    id: number;
    title: string;
    imageSrc: string;
    price: number;
  };
}