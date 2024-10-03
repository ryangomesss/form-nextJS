"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function PasswordRecovery() {
    const form = useForm();

    async function onSubmit(formData: unknown) {
        console.log(formData);
        await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/recover-password/", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
    }

    return (
        <section className="flex items-center justify-center h-screen bg-gradient-to-t from-blue-500 to-black">
            <Form {...form}>
                <form className="bg-white w-3/5 max-w-lg border-solid border-2 p-8 rounded shadow-md" onSubmit={form.handleSubmit(onSubmit)}>

                    <h2 className="text-center text-red-500 font-title text-2xl mb-6">Recuperação de Senha</h2>

                    <FormField
                        control={form.control}
                        name="info-recuperation"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel className="text-black font-titulo text-xl">Insira o seu email, telefone ou nome de usuário e enviaremos um link para você voltar a acessar a sua conta:</FormLabel>
                                <FormControl>
                                    <Input className="bg-white font-title text-red-500 text-2sm" type="email" placeholder="E-mail, telefone ou nome de usuário:" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="mt-4">
                        <Button type="submit" className="w-full bg-blue-500 font-title text-white hover:bg-blue-600 transition text-xl duration-300">
                            Enviar solicitação
                        </Button>
                    </div>

                    <div className="m-4 gap-10 text-center">
                        <button className="">
                            <a href="/login" className="text-blue-500 hover:underline">Voltar para a tela de login</a>
                        </button>
                        <div className="mt-2"> {/* Adicione uma margem superior aqui */}
                            <a href="/" className="text-blue-500 hover:underline">Criar nova conta</a>
                        </div>
                    </div>

                </form>
            </Form>
        </section>
    )
}
