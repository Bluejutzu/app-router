/** @format */

"use client";
require("dotenv").config();
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ModalWrapper from "./Attention";
const websiteUrl = "https://bluejutzu.vercel.app/";

const FormSchema = z.object({
  username: z.string().min(1, {
    message: "Username must be at least 1 character.",
  }),
  suggestion: z.string().min(5, {
    message: "Suggestion must be at least 5 characters.",
  }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      suggestion: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const username = data.username;
      const suggestion = data.suggestion;

      const token =
        "6yHjJbFteB7AlzjrSyYtZGusNv8ykqo7Cx0oELkpJPGZW7lvyN3pr46tqYYxj-Z2wNaa";
      const url = `https://discord.com/api/v10/webhooks/1216394063721529434/${token}`;

      const params = {
        username: username,
        content: suggestion,
      };
      const headers = {
        "Content-Type": "application/json",
      };

      const req = await axios
        .post(url, params, {
          headers,
        })
        .catch((error) => {
          console.error("An error occured:", error);
        });
    } catch (error) {
      console.log(error);
    }
    console.log(
      `You submitted the following values: \n ${JSON.stringify(data)}`
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mx-auto  space-y-4 text-white max-w-lg bg-gradient-to-r from-[#252a3f] to-[#423555] p-7 rounded-2xl drop-shadow-2xl '>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  className='text-gray-900 '
                  placeholder='Max Mustermann'
                  {...field}
                />
              </FormControl>
              <FormDescription>Username to display</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='suggestion'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Suggestion</FormLabel>
              <FormControl>
                <Input
                  className='text-gray-900 '
                  placeholder='Add more gradient!'
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Say whatever you would like us to add!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <ModalWrapper />
      </form>
    </Form>
  );
}
