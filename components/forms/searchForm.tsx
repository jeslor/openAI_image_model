"use client"
import { useContext, useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { searchForImages } from "@/lib/actions/search.actions"
import { StateContext } from "../stateProvider/stateProvider"

const formSchema = z.object({
  search: z.string().min(2, {
    message: "Word must be atleast 2 characters.",
  }),
})


export function SearchForm() {
  const {images, setImages, setLoader} = useContext(StateContext);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          search: "",
        },
        })


    const onSubmit = async(data:z.infer<typeof formSchema>) => {
        try {
          setLoader(true);
          const res =  await searchForImages(data.search);
          if (res.message === "success") {
            let generatedImages = [];
            if (res.info.length > 1) {
               generatedImages = res.info.map((image:any) => {
                return {url: image.url, revised_prompt: res.topic}
              });
            } else {
              generatedImages = [{url: res.info[0].url, revised_prompt: res.topic}];
            }
            const currentImages = localStorage.getItem("images") ? JSON.parse(localStorage.getItem("images") as string) : [];
            localStorage.setItem("images", JSON.stringify([...currentImages, ...generatedImages]));
            setImages([ ...generatedImages, ...currentImages]);
            form.reset();
            setLoader(false);
            
          }

          if (res.message === "error") {
            console.log("error", res);
            
          }
          
        } catch (error) {
          console.log("client error", error);
          
        }
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex max-w-[700px] w-full mx-auto items-center h-fit relative">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem  className="w-full h-fit">
              <FormControl>
                <Input className="rounded-[24px] focus:shadow-sm h-[50px] tablet:border-[2px]" placeholder="search for something" {...field} />
              </FormControl>
              <FormMessage className="text-[12px]" />
            </FormItem>
          )}
        />
        <Button className="!mt-0 absolute right-0 rounded-r-[24px] h-[50px] top-0" type="submit">Search</Button>
      </form>
    </Form>
  )
}
