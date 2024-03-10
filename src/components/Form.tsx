/** @format */

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

      const suggestion = await JSON.stringify(data);
      const reqBody = {
        content: suggestion, // Assuming suggestion is the variable you want to include as content
      };
      const req = await fetch(
        `https://discord.com/api/v10/channels/1168943371981697024/messages`,
        {
          method: "POST",

          headers: {
            Authorization: `Bot ${process.env.TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reqBody),
        }
      );
      console.log(req);
    } catch (error) {
      throw new Error(`${error}`);
    }
    console.log(
      `You submitted the following values: \n ${JSON.stringify(data)}`
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mx-auto w-2/3 space-y-4 text-white max-w-lg bg-slate-400 p-5 rounded-2xl '>
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
                Say whatever you'd like us to add!
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
