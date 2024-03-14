/** @format */

"use client";
import dotenv from "dotenv";
dotenv.config();
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
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
import { toast } from "@/components/ui/use-toast";
 import {
  EmbedBuilder,
  
} from "discord.js"; 

const FormSchema = z.object({
  suggestion: z.string().min(10, {
    message: "Suggestion must be at least 10 characters.",
  }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      suggestion: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
            <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
      const suggestion = JSON.stringify(data);

       const token =
         "6yHjJbFteB7AlzjrSyYtZGusNv8ykqo7Cx0oELkpJPGZW7lvyN3pr46tqYYxj-Z2wNaa";
       const url = `https://discord.com/api/v10/webhooks/1216394063721529434/${token}`;
       

       const suggestionEmbed = new EmbedBuilder()
         .setAuthor({ name: "Suggestion System" })
         .setTitle(`New Suggestion submitted`)
         .setDescription(`From`)
         .setFields({
           name: "Suggestion:",
           value: "Mock text",
         })
         .setTimestamp();

       const params = {
         embeds: [suggestionEmbed],
         username: "Send by API",
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
    } catch (error) {}
    console.log(
      `You submitted the following values: \n ${JSON.stringify(data)}`
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mx-auto  space-y-4 text-white max-w-lg bg-slate-400 p-5 rounded-2xl '>
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
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
