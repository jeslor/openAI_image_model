"use client";
import { useContext, useState } from "react";
import { StateContext } from "../stateProvider/stateProvider";
import Loader from "../ui/loader";
interface imageType {
    url:string,
    revised_prompt:string,
}
const ImageContainer = () => {
    const { images, loader } = useContext(StateContext);
  return (
    loader ? <div className="max-h-[30vh] h-full w-full flex items-center justify-center pt-12 ">
        <Loader />
    </div>
    :
    <div className="grid grid-cols-auto-fill-200  gap-x-3 gap-y-6 bg-black flex-2  w-full px-6 pt-4 grow-[2] rounded-t-[16px] tablet:rounded-t[24px] desktop:rounded-t-[32px] items-center">
        {
            images.map((image:imageType, index:number) => (
                <div key={index} className="flex flex-col items-start justify-start group h-fit relative">
                    <img src={image.url} alt={image.revised_prompt} className="w-full h-full group-hover:scale-[1.1] transition rounded-sm" />
                    <p className="truncate w-[180px] pt-2 text-slate-300 text-center text-[14px] capitalize bg-black absolute left-[10px] bottom-0 opacity-65  py-2 rounded-[24px]">{image.revised_prompt}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ImageContainer