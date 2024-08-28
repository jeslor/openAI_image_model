"use client"

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

const formSchema = z.object({
  search: z.string().min(2, {
    message: "Word must be atleast 2 characters.",
  }),
})


export function SearchForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        })


    const onSubmit = async(data: any) => {
        try {
          const res =  await searchForImages(data.search);
          console.log(res);
          
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
        <Button className="!mt-0 absolute right-0 rounded-r-[24px] h-full" type="submit">Search</Button>
      </form>
    </Form>
  )
}
