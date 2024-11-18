import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const join = (value: ClassValue[]) => twMerge(clsx((value)));
