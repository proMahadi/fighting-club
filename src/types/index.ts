import type { StaticImageData } from "next/image";

export interface ContainerProps {
    children:React.ReactNode;
    className?:string;
}

export interface Service{
    id:string,
    name:string,
    img:StaticImageData,
    icon:string,
}