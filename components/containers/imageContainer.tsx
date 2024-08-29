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
    !loader ? <div className="max-h-[30vh] h-full w-full">
        <Loader />
    </div>
    :
    <div>
        {
            images.map((image:imageType, index:number) => (
                <div key={index} className="flex flex-col items-center">
                    <img src={image.url} alt={image.revised_prompt} className="w-full h-full" />
                    <p className="text-ellipse">{image.revised_prompt}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ImageContainer