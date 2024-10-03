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
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
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
    <section className="flex items-center justify-center h-screen bg-gradient-to-l from-red-500 to-black">
      <Form {...form}>
        <form className="bg-white w-3/5 max-w-lg border-solid border-2 p-8 rounded shadow-md w-1/4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="first-name"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-black font-title text-2xl">Nome:</FormLabel>
                <FormControl>
                  <Input className="bg-white text-red-500 font-title text-xl" type="text" placeholder="Informe seu primeiro nome:" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last-name"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-black font-title text-2xl">Sobrenome:</FormLabel>
                <FormControl>
                  <Input className="bg-white text-red-500 font-title text-xl" type="text" placeholder="Informe seu último nome:" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-black font-title text-2xl">CPF:</FormLabel>
                <FormControl>
                  <Input className="bg-white text-red-500 font-title text-xl" type="number" placeholder="Informe seu CPF (apenas números):" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date_of_birth"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="bg-white text-black font-title text-xl">DATA DE ANIVERSÁRIO:</FormLabel>
                <FormDescription>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(new Date(field.value), 'dd/MM/yy') // Alteração aqui
                          ) : (
                            <span className="bg-white font-title text-xl">Informe sua data de aniversário:</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
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
            name="state"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-black font-title text-2xl">Estado:</FormLabel>
                <FormControl>
                  <select className="text-black place-items-center font-title text-xl border border-gray-200 rounded" {...field}>
                    <option className="bg-white text-red-500 font-title text-xl" value="#" disabled selected>Informe o seu estado:</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>

                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-black font-title text-2xl">Cidade:</FormLabel>
                <FormControl>
                  <Input className="bg-white font-title text-red-500 text-xl" type="text" placeholder="Informe a cidade onde reside:" {...field} />
                </FormControl>
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
                  <Input className="bg-white font-title text-red-500 text-xl" type="text" placeholder="Insira seu e-mail (@gmail.com): " {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-black font-title text-2xl">Senha:</FormLabel>
                <FormControl>
                  <Input className="bg-white font-title text-red-500 text-xl" type="text" placeholder="Insira sua senha:" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="pt-4 flex flex-col">
            <Link className='flex' href={"./login"}>
              <Button className="font-title rounded-lg w-full text-3xl" type="submit">CADASTRAR-SE</Button>
            </Link>
          </div>
        </form>
      </Form>
    </section>
  )
}
