"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { ImSpinner2 } from "react-icons/im";
import { z } from "zod";

import { Button } from "../Button";
import Input from "../Input";
import Textarea from "../Textarea";
import { FormToast } from "./components/FormToast";
import { useFormToastContext } from "./context/hook";

const schema = z.object({
  name: z.string().nonempty("O campo não pode estar vazio!"),
  email: z.string().email("Digite um e-mail válido!"),
  subject: z.string().nonempty("O campo não pode estar vazio!"),
  body: z.string().nonempty("O campo não pode estar vazio!"),
});

type FormProps = z.infer<typeof schema>;

interface ContactFormProps {
  config: {
    service_id: string;
    template_id: string;
    public_key: string;
  };
}

export const ContactForm: React.FC<ContactFormProps> = ({ config }) => {
  const { state, updateState } = useFormToastContext();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const handleForm = async (data: FormProps) => {
    setLoading(true);

    try {
      const resp = await emailjs.send(
        config.service_id,
        config.template_id,
        data,
        config.public_key
      );

      if (resp.status !== 200) {
        throw new Error();
      }

      updateState({
        show: true,
        isError: false,
        title: "E-mail enviando com sucesso!",
        message: "Agradeço por entrar em contato.",
      });
    } catch (error) {
      updateState({
        show: true,
        isError: true,
        title: "Erro ao enviar o formulário!",
        message: "Desculpe, tente enviar o e-mail novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col justify-center">
      <h2 className="w-full text-center font-mono text-4xl font-bold">
        Contate-me
      </h2>
      <form onSubmit={handleSubmit(handleForm)}>
        <fieldset>
          <Input
            error={errors.name?.message!}
            {...register("name")}
            label="Nome"
            name="name"
          />
          <Input
            error={errors.email?.message!}
            {...register("email")}
            label="E-mail"
            name="email"
          />
          <Input
            error={errors.subject?.message!}
            {...register("subject")}
            label="Assunto"
            name="subject"
          />
          <Textarea
            error={errors.body?.message!}
            {...register("body")}
            label="Descrição"
            name="body"
          />
        </fieldset>
        <div className="flex w-full justify-center gap-x-6">
          <Button type="submit" disabled={!!loading}>
            {loading ? <ImSpinner2 className="animate-spin" /> : "Enviar"}
          </Button>
          <Button type="reset" variant="destructive" onClick={() => reset()}>
            Reset
          </Button>
        </div>
      </form>
      <AnimatePresence>{state.show && <FormToast />}</AnimatePresence>
    </div>
  );
};
