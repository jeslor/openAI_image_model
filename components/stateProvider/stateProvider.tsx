"use client";
import {useState, createContext, ReactNode} from "react";

export const StateContext = createContext<any>(null);

export function StateProvider({children}: Readonly<{children: ReactNode}>) {
    const [images, setImages] = useState<any>([]);
    const [loader, setLoader] = useState<boolean>(false);

    return (
        <StateContext.Provider value={{images, setImages, loader, setLoader}}>
            {children}
        </StateContext.Provider>
    );
}