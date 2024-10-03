"use client"
{/* <Input className="font-title bg-red-500 text-xl" type="text" placeholder="CPF:" {...field} /> */ }

import Link from 'next/link';


import { useForm } from "react-hook-form"
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
// import { CalendarIcon } from "@radix-ui/react-icons"
// import { format } from "date-fns"
// import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function InputForm() {
    const form = useForm();

    async function onSubmit(formData: unknown) {
        console.log(formData);
        await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/users/", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
    }
    return (
        <section className="flex items-center justify-center h-screen bg-gradient-to-t from-blue-500 to-black">
            <Form {...form}>
                <form className="bg-white w-3/5 max-w-lg border-solid border-2 p-8 rounded shadow-md w-1/4" onSubmit={form.handleSubmit(onSubmit)}>

                    <FormField
                        control={form.control}
                        name="date_of_birth"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormDescription>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel className="text-black font-title text-2xl">E-mail:</FormLabel>
                                <FormControl>
                                    <Input className="bg-white font-title text-red-500 text-xl" type="text" placeholder="Insira seu e-mail:" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-px">
                                <FormLabel className="text-black font-title text-2xl">Senha:</FormLabel>
                                <FormControl>
                                    <Input className="bg-white font-title text-red-500 text-xl" type="text" placeholder="Insira sua senha:" {...field} />
                                </FormControl>
                                <Link className='font-title| text-red-500 hover:text-blue-500 transition-colors duration-300' href="/esqueceuSenha">
                                    Esqueceu sua senha? Clique aqui!
                                </Link>
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-col">
                        <Link href={""}></Link>
                        <Button className="p-2  font-title text-3xl" type="submit">ENTRAR</Button>
                    </div>
                </form>
            </Form>
        </section>
    )
}
