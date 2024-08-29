"use client";
import {useState, createContext, ReactNode, useEffect} from "react";

export const StateContext = createContext<any>(null);

export function StateProvider({children}: Readonly<{children: ReactNode}>) {

    const [images, setImages] = useState<any>([]);
    const [loader, setLoader] = useState<boolean>(false);


    useEffect(() => {
       setImages(localStorage.getItem("images") ? JSON.parse(localStorage.getItem("images") as string) : []);
    }, []);


    return (
        <StateContext.Provider value={{images, setImages, loader, setLoader}}>
            {children}
        </StateContext.Provider>
    );
}