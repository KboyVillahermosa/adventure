// src/react-awesome-shapes.d.ts
declare module "react-awesome-shapes" {
  import { FC, HTMLAttributes } from "react";

  type SizeType = string | string[];

  interface ShapeProps extends HTMLAttributes<HTMLDivElement> {
    size?: SizeType;
    color?: string;
    zIndex?: number;
    width?:nuumber;
  }

  export const Donut: FC<ShapeProps>;
  export const CircleGrid: FC<ShapeProps>; 
  export const SquareDonut: FC<ShapeProps>; 
}
