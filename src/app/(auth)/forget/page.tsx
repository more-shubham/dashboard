"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { LockClosedIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" })
})


export default function Home() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <>
      <div className=" px-4 pt-4 pb-2 border-b-2 mx-2">
        <LockClosedIcon className="mx-auto h-8 w-8" />
        <h1 className="sr-only" >Forget Password | MissionRTC</h1>
        <div className="text-center mt-1" >Forget Password</div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 px-4 pb-4 pt-2 w-80">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Submit</Button>
          <Button type="submit" variant={"outline"} asChild className="w-full">
            <Link href={'/'} >
              Login
            </Link>
          </Button>
        </form>
      </Form>
    </>
  );
}
