import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Success<T> = {
  data: T;
  error: null;
};

type Fail<F = Error> = {
  data: null;
  error: F;
};

export async function tryCatch<T, F = Error>(
  promise: () => Promise<T> | Promise<T>,
  onThrow?: boolean,
): Promise<Success<T> | Fail<F>> {
  try {
    const data = await promise?.();

    return { data, error: null };
  } catch (error) {
    console.log("ERROR => ", error);
    if (onThrow) throw error;
    return { data: null, error: error as F };
  }
}
