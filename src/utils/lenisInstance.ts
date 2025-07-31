import Lenis from "lenis";

let lenis: Lenis | null = null;

export const setLenisInstance = (instance: Lenis) => {
    lenis = instance
}

export const getLenisInstance = () => lenis