"use client";
import {useState, createContext, ReactNode} from "react";

export const StateContext = createContext<any>(null);

export function StateProvider({children}: Readonly<{children: ReactNode}>) {
    const [images, setImages] = useState<any>([]);

    return (
        <StateContext.Provider value={{images, setImages}}>
            {children}
        </StateContext.Provider>
    );
}