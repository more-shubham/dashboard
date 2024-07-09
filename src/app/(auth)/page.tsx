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
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }).max(32, { message: "Password must be no more than 32 characters long" }).regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" }).regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" }).regex(/[0-9]/, { message: "Password must contain at least one number" }).regex(/[\W_]/, { message: "Password must contain at least one special character" })
})


export default function Home() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <>
      <div className=" px-4 pt-4 pb-2 border-b-2 mx-2">
        <LockClosedIcon className="mx-auto h-8 w-8" />
        <h1 className="sr-only" >Login | MissionRTC</h1>
        <div className="text-center mt-1" >Login</div>
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className=" flex justify-between items-center">
                  <FormLabel>Password</FormLabel>
                  <Button type="submit" variant={"link"} asChild className="p-0 h-fit">
                    <Link href={'/forget'} >
                      Forget Password
                    </Link>
                  </Button>
                </div>
                <FormControl>
                  <Input placeholder="Enter Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Submit</Button>
          <Button type="submit" variant={"outline"} asChild className="w-full">
            <Link href={'/register'} >
              Register
            </Link>
          </Button>
        </form>
      </Form>
    </>
  );
}
